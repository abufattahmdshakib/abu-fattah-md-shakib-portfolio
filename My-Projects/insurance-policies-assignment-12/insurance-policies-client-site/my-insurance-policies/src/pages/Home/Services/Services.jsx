import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularPolicies = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch top 6 most SOLD policies (based on payments)
        const response = await fetch(`https://insurance-policies-server-site.vercel.app/addadmin/popular`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched top selling policies:', data);
        setServicesData(data);
        
      } catch (error) {
        console.error("Failed to fetch popular policies:", error);
        setError(error.message || "Failed to fetch popular policies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPopularPolicies();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg text-gray-600">Loading top selling policies...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
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
    <section className="py-10 px-4 sm:px-6 rounded-xl mb-10 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Best Selling Insurance Policies
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Top 6 best selling insurance policies - most purchased by our customers.
          </p>
        </div>

        {/* Policies Grid */}
        {servicesData.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-xl mb-4">📋 No top selling policies available at the moment.</div>
            <p className="text-gray-400">Please check back later or contact support.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {servicesData.map((policy, idx) => (
                <div
                  key={policy._id || idx}
                  className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 px-4 py-3 max-w-[420px] w-full mx-auto"
                >
                  {/* Sales Rank Badge */}
                  {idx < 3 && (
                    <div className="absolute top-2 left-2 z-10">
                      {idx === 0 && (
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          🥇 #1 Bestseller
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          🥈 #2 Popular
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          🥉 #3 Trending
                        </div>
                      )}
                    </div>
                  )}

                  {/* Sales Count Badge */}
                  {policy.salesCount > 0 && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      💰 {policy.salesCount} Sales
                    </div>
                  )}

                  {/* Policy Image */}
                  {policy.policyImage && (
                    <div className="relative overflow-hidden rounded-lg mb-3 mt-8">
                      <img
                        src={policy.policyImage}
                        alt={policy.title || 'Policy'}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.log('Image failed to load:', policy.policyImage);
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  {/* Policy Title */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {policy.title || 'Untitled Policy'}
                    </h3>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2 flex-shrink-0" />
                  </div>

                  {/* Sales Performance Indicators */}
                  <div className="flex items-center gap-2 mb-3">
                    {policy.salesCount > 0 ? (
                      <>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">
                          🎯 {policy.salesCount} Sold
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold">
                          💎 Best Seller
                        </span>
                      </>
                    ) : (
                      <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-semibold">
                        🆕 New Launch
                      </span>
                    )}
                  </div>

                  {/* Sales Counter Display */}
                  {policy.salesCount > 0 && (
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 p-2 rounded-lg mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-green-700">Sales Count:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-green-600">{policy.salesCount}</span>
                          <span className="text-xs text-green-500">purchases</span>
                        </div>
                      </div>
                      {policy.totalRevenue && (
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-600">Revenue:</span>
                          <span className="text-xs font-semibold text-gray-700">
                            ${policy.totalRevenue.toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Policy Description */}
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                    {policy.description || 'No description provided.'}
                  </p>

                  {/* Policy Details */}
                  <div className="space-y-1 mb-3">
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

                  {/* Premium Rate */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-3 rounded-lg text-center mb-4">
                    <p className="text-xs text-gray-600">Premium Rate</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      ${policy.basePremiumRate || 'N/A'}
                    </p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>

                  {/* Buy Now Button */}
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        console.log('Navigating to policy details:', policy._id);
                        navigate(`/policydetails/${policy._id}`, { 
                          state: { 
                            policy,
                            fromBestSellers: true 
                          } 
                        });
                      }}
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 rounded-md font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      {policy.salesCount > 0 ? 'Join ' + policy.salesCount + ' Buyers' : 'Be First to Buy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sales Statistics */}
            <div className="text-center mb-8">
              <p className="text-gray-600 text-sm">
                Showing top {servicesData.length} best selling policies
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                  💰 Best Sellers
                </span>
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  🎯 Top Revenue
                </span>
                <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                  📈 Most Popular
                </span>
              </div>
            </div>
          </>
        )}

        {/* View All Policies Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              console.log('Navigating to all policies page');
              navigate('/allpolicies');
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Policies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;