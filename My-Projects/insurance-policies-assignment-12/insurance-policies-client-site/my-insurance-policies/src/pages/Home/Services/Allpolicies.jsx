import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';

const Allpolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPolicies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://insurance-policies-server-site.vercel.app/addadmin/popular');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched all policies:', data);
        setPolicies(data);
      } catch (error) {
        console.error("Failed to fetch all policies:", error);
        setError(error.message || "Failed to fetch all policies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllPolicies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg text-gray-600">Loading all policies...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 mt-10">
        <div className="text-red-600 font-semibold text-lg mb-4">⚠️ {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="mt-20 py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <Helmet>
        <title>All Policies</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            All Insurance Policies
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Complete collection of all available insurance policies.
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Popular Policies
          </button>
        </div>

        {/* Cards */}
        {policies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">📋 No policies available.</div>
            <p className="text-gray-400">Please check back later or contact support.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {policies.map((policy, idx) => (
                <div
                  key={policy._id || idx}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 px-5 py-4 max-w-[420px] w-full mx-auto"
                >
                  {/* Application Count Badge */}
                  {policy.applicationCount > 0 && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                      {policy.applicationCount} Applied
                    </div>
                  )}

                  {/* Image */}
                  {policy.policyImage && (
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={policy.policyImage}
                        alt={policy.title || 'Policy'}
                        className="w-full h-28 sm:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => (e.target.style.display = 'none')}
                      />
                    </div>
                  )}

                  {/* Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {policy.title || 'Untitled Policy'}
                    </h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2 flex-shrink-0" />
                  </div>

                  {/* Application Status */}
                  {policy.applicationCount > 0 ? (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">
                        ✅ {policy.applicationCount} Applied
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-semibold">
                        🆕 New Policy
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
                    {policy.description || 'No description provided.'}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span className="text-sm font-semibold text-gray-700">Age:</span>
                      <span className="text-sm text-gray-600">
                        {policy.minAge || 'N/A'} - {policy.maxAge || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span className="text-sm font-semibold text-gray-700">Coverage:</span>
                      <span className="text-sm text-gray-600">{policy.coverageRange || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <span className="text-sm font-semibold text-gray-700">Duration:</span>
                      <span className="text-sm text-gray-600">{policy.durationOptions || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Premium */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-4 rounded-lg text-center mb-4">
                    <p className="text-xs text-gray-600">Premium Rate</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      ${policy.basePremiumRate || 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">per month</p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate(`/policydetails/${policy._id}`, { state: { policy } })}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* Total Count Display */}
            <div className="text-center mt-10">
              <p className="text-gray-600">
                Total {policies.length} policies available
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  ✅ Applied: {policies.filter(p => p.applicationCount > 0).length}
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                  🆕 New: {policies.filter(p => p.applicationCount === 0).length}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Allpolicies;