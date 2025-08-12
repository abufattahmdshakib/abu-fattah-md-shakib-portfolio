import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Mosaic } from 'react-loading-indicators';

const formatDate = (iso) => new Date(iso).toLocaleString();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    isError,
    data: payments = [],
  } = useQuery({
    queryKey: ['payments', user?.email],
    enabled: !!user?.email, // Prevent running query until user email is available
    queryFn: async () => {
      await delay(3000);
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      const data = res.data;

      // Safeguard: Ensure the response is always an array
      if (Array.isArray(data)) {
        return data;
      } else {
        console.error('Unexpected payments data:', data);
        return [];
      }
    },
  });

  if (isPending) {
    return <div className='ml-40 mt-40 md:ml-[500px] md:mt-72 mb-[30px]'>
      <Mosaic color={["#ef0000", "#77ef00", "#00efef", "#7700ef"]} />
    </div>
      ;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 py-6">
        Failed to load payment history. Please try again.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-xl">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Parcel ID</th>
            <th>Amount</th>
            <th>Transaction</th>
            <th>Paid At</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(payments) && payments.length > 0 ? (
            payments.map((p, index) => (
              <tr key={p.transactionId}>
                <td>{index + 1}</td>
                <td className="truncate" title={p.parcelId}>
                  {p.parcelId?.slice(0, 8)}...
                </td>
                <td>৳{p.amount}</td>
                <td className="font-mono text-sm">
                  <span title={p.transactionId}>
                    {p.transactionId?.slice(0, 8)}...
                  </span>
                </td>
                <td>{formatDate(p.paid_at_string)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-6">
                No payment history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
