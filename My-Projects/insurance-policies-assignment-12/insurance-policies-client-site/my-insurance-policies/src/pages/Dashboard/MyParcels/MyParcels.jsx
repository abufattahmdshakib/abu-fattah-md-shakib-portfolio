import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Mosaic } from 'react-loading-indicators';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: parcels = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['my-parcels', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
        await delay(3000);
      const res = await axiosSecure.get(`/SendParcel?email=${user.email}`);
      return res.data;
    },
  });

  const handleView = (id) => {
    console.log('View parcel details:', id);
  };

  const handlePay = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This parcel will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e11d48',
      cancelButtonColor: '#6b7280',
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/SendParcel/${id}`);
        if (res.data?.deletedCount) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Parcel has been deleted.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
          refetch();
        }
      } catch (err) {
        Swal.fire('Error', err.message || 'Failed to delete parcel', 'error');
      }
    }
  };

  const formatDate = (iso) => new Date(iso).toLocaleString();

  if (isLoading) {
    return (
      <div className='ml-40 mt-40 md:ml-[500px] md:mt-72 mb-[30px]'>
        <Mosaic color={["#ef0000", "#77ef00", "#00efef", "#7700ef"]} />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 py-10">
        Failed to load parcels. Please try again.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto shadow-md rounded-xl">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200 text-base font-semibold">
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Status</th>
            <th>Submitted On</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(parcels) && parcels.length > 0 ? (
            parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td className="max-w-[180px] truncate">{parcel.details?.fullName}</td>
                <td>
                  <span className={`badge ${
                    parcel.status === 'Approved' ? 'badge-success' :
                    parcel.status === 'Rejected' ? 'badge-error' :
                    'badge-warning'
                  }`}>
                    {parcel.status}
                  </span>
                </td>
                <td>{formatDate(parcel.creation_date)}</td>
                <td>৳{parcel.cost}</td>
                <td>
                  <span className={`badge ${
                    parcel.payment_status === 'paid' ? 'badge-success' : 'badge-error'
                  }`}>
                    {parcel.payment_status}
                  </span>
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleView(parcel._id)}
                    className="btn btn-xs btn-outline"
                  >
                    View
                  </button>
                  {parcel.payment_status === 'unpaid' && (
                    <button
                      onClick={() => handlePay(parcel._id)}
                      className="btn btn-xs btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-6">
                No parcels found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
