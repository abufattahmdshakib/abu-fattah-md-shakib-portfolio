import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const Policydetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch(`https://insurance-policies-server-site.vercel.app/addadmin/${id}`);
        if (!response.ok) throw new Error("Policy not found");
        const data = await response.json();
        setPolicy(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading policy...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div
      className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 
                 rounded-lg shadow-md mt-20 transition transform hover:scale-[1.015] duration-300 ease-in-out"
    >
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        {policy.title || "Untitled Policy"}
      </h1>

      {policy.policyImage && (
        <div className="mb-6">
          <img
            src={policy.policyImage}
            alt={policy.title}
            className="w-full max-h-[400px] object-cover rounded-lg shadow"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Description</h3>
            <p className="text-gray-600">{policy.description || 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Coverage Range</h3>
            <p className="text-gray-600">{policy.coverageRange || 'N/A'}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Duration Options</h3>
            <p className="text-gray-600">{policy.durationOptions || 'N/A'}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Eligible Age</h3>
            <p className="text-gray-600">
              {policy.minAge || 'N/A'} - {policy.maxAge || 'N/A'} years
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Premium Rate</h3>
            <p className="text-2xl font-bold text-indigo-600">
              ${policy.basePremiumRate || 'N/A'} <span className="text-sm font-normal">/ month</span>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Other Info</h3>
            <p className="text-gray-600">{policy.additionalInfo || 'No additional information available.'}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
        <button
          onClick={() => navigate('/sendParcel', { state: { policyId: policy._id } })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 duration-200"
        >
          Get Quote
        </button>
       <button
  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 duration-200"
>
  Book Agent Consultation
</button>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded shadow-md hover:shadow-lg transition transform hover:scale-105 duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Policydetails;
