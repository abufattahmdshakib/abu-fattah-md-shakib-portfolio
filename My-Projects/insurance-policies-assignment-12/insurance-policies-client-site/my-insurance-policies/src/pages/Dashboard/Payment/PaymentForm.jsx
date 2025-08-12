import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useTrackingLogger from '../../../hooks/useTrackingLogger';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { parcelId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { logTracking } = useTrackingLogger();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  // Fetch parcel info
  const { isPending, data: parcelInfo = {}, error: fetchError } = useQuery({
    queryKey: ['parcel', parcelId],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/SendParcel/${parcelId}`);
        console.log('Fetched parcel info:', res.data);
        return res.data;
      } catch (error) {
        console.error('Error fetching parcel:', error);
        throw error;
      }
    },
    enabled: !!parcelId
  });

  // Show loading or error states
  if (isPending) return <p className="text-center py-10">Loading parcel information...</p>;
  
  if (fetchError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading parcel information</p>
        <button 
          onClick={() => navigate('/dashboard/myParcels')}
          className="btn btn-primary mt-4"
        >
          Go Back to My Parcels
        </button>
      </div>
    );
  }

  // Calculate amount - ensure minimum 50 cents for Stripe
  const originalAmount = Number(parcelInfo.cost || 0);
  const minimumAmountUSD = 0.50; // 50 cents minimum
  const amount = Math.max(originalAmount, minimumAmountUSD);
  const amountInCents = Math.round(amount * 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      setError('Stripe has not loaded yet. Please wait.');
      return;
    }

    setProcessing(true);
    setError('');

    const card = elements.getElement(CardElement);
    if (!card) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }

    try {
      // Step 1: Validate card input
      const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
        billing_details: {
          name: user?.displayName || 'Customer',
          email: user?.email || '',
        },
      });

      if (cardError) {
        setError(cardError.message);
        setProcessing(false);
        return;
      }

      console.log('Payment method created:', paymentMethod);

      // Step 2: Create payment intent
      console.log('Creating payment intent with:', { amountInCents, parcelId });
      
      const intentRes = await axiosSecure.post('/create-payment-intent', {
        amountInCents,
        parcelId,
      });

      console.log('Payment intent response:', intentRes.data);
      const { clientSecret } = intentRes.data;

      if (!clientSecret) {
        throw new Error('Payment intent creation failed - no client secret received');
      }

      // Step 3: Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id
      });

      console.log('Payment confirmation result:', result);

      if (result.error) {
        setError(result.error.message);
        setProcessing(false);
      } else if (result.paymentIntent.status === 'succeeded') {
        const transactionId = result.paymentIntent.id;
        console.log('Payment succeeded:', transactionId);

        // Step 4: Record payment in database
        const paymentData = {
          parcelId,
          email: user.email,
          amount: amount,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };

        console.log('Recording payment:', paymentData);

        const paymentRes = await axiosSecure.post('/payments', paymentData);
        console.log('Payment recording response:', paymentRes.data);

        if (paymentRes.data.insertedId) {
          // Success notification
          await Swal.fire({
            icon: 'success',
            title: 'পেমেন্ট সফল হয়েছে!',
            html: `
              <p><strong>Transaction ID:</strong> <code>${transactionId}</code></p>
              <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
              <p>আপনার পার্সেলের পেমেন্ট সম্পন্ন হয়েছে।</p>
            `,
            confirmButtonText: 'My Parcels এ যান',
          });

          // Optional tracking log
          try {
            await logTracking({
              tracking_id: parcelInfo.tracking_id || `TRK-${Date.now()}`,
              status: 'payment_completed',
              details: `Payment completed by ${user.displayName || user.email}. Amount: $${amount.toFixed(2)}`,
              updated_by: user.email,
            });
          } catch (trackingError) {
            console.error('Tracking log error:', trackingError);
            // Don't fail the whole process for tracking errors
          }

          navigate('/dashboard/myParcels');
        } else {
          throw new Error('Payment recording failed');
        }
      }
    } catch (err) {
      console.error('Payment process error:', err);
      setError(err.response?.data?.message || err.message || 'Payment failed. Please try again.');
      setProcessing(false);
      
      Swal.fire({
        icon: 'error',
        title: 'পেমেন্ট ব্যর্থ হয়েছে',
        text: err.response?.data?.message || err.message || 'কোন সমস্যা হয়েছে। আবার চেষ্টা করুন।',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
        
        {/* Parcel Information */}
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Parcel Details:</h3>
          <p><strong>Parcel ID:</strong> {parcelId}</p>
          <p><strong>Original Cost:</strong> ৳{originalAmount.toFixed(2)}</p>
          {amount > originalAmount && (
            <p className="text-sm text-orange-600">
              <strong>Adjusted Amount:</strong> ${amount.toFixed(2)} (Minimum $0.50 required)
            </p>
          )}
          <p><strong>Status:</strong> {parcelInfo.payment_status || 'Unpaid'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3 border rounded-lg">
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}
            />
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-semibold ${
              processing || !stripe 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            disabled={processing || !stripe}
          >
            {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
          </button>
          
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;