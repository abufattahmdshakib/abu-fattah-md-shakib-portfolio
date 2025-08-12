import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import Fields from '../../pages/Dashboard/PendingRiders/Fields';
import UpdatePolicyForm from './UpdatePolicyForm';
import Swal from 'sweetalert2';

const AdminAllPolicies = () => {
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const fetchPolicies = async () => {
        try {
            const res = await axios.get('https://insurance-policies-server-site.vercel.app/allpolicies');
            setPolicies(res.data);
        } catch (err) {
            setError('Failed to load policies.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://insurance-policies-server-site.vercel.app/policies/${id}`);
                setPolicies(policies.filter((policy) => policy._id !== id));
                Swal.fire(
                    'Deleted!',
                    'Policy has been deleted.',
                    'success'
                );
            } catch (err) {
                console.error(err);
                Swal.fire(
                    'Failed!',
                    '❌ Failed to delete policy.',
                    'error'
                );
            }
        }
    };


    const handleUpdate = (id) => {
        const found = policies.find((p) => p._id === id);
        if (found) {
            setSelectedPolicy(found);
            setShowFormModal(true);
        }
    };

    useEffect(() => {
        fetchPolicies();
    }, [showFormModal]);

    if (loading) return <p className="text-center py-8">Loading policies...</p>;
    if (error) return <p className="text-center py-8 text-red-600">{error}</p>;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-200 text-gray-700 rounded shadow relative">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">All Insurance Policies</h2>
                <button
                    onClick={() => {
                        setShowFormModal(true);
                        setSelectedPolicy(null);
                    }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-800  text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    <FaPlus /> Add New Policy
                </button>
            </div>
            {/* Desktop Table */}
            <div className="hidden md:block w-full">
                <table className="w-full border border-gray-300 table-auto md:table-fixed">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-2 py-1 text-left max-w-[200px] whitespace-normal">Title</th>
                            <th className="border px-2 py-1 text-left truncate max-w-[100px] whitespace-nowrap">Category</th>
                            <th className="border px-2 py-1 text-left max-w-[250px] whitespace-normal">Description</th>
                            <th className="border px-2 py-1 text-left truncate max-w-[100px] whitespace-nowrap">Age Range</th>
                            <th className="border px-2 py-1 text-left max-w-[150px] whitespace-normal">Coverage Range</th>
                            <th className="border px-2 py-1 text-left max-w-[150px] whitespace-normal">Duration Options</th>
                            <th className="border px-2 py-1 text-left max-w-[100px] whitespace-normal">Base Premium Rate</th>
                            <th className="border px-2 py-1 text-left whitespace-nowrap">Policy Image</th>
                            <th className="border px-2 py-1 text-center whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policies.map((policy) => (
                            <tr key={policy._id} className="hover:bg-gray-50 align-top">
                                <td className="border px-2 py-1 max-w-[200px] whitespace-normal">{policy.title}</td>
                                <td className="border px-2 py-1 truncate max-w-[100px] whitespace-nowrap">{policy.category}</td>
                                <td className="border px-2 py-1 max-w-[250px] whitespace-normal">
                                    <div className="max-h-24 overflow-auto whitespace-normal break-words">
                                        {policy.description || 'No description'}
                                    </div>
                                </td>
                                <td className="border px-2 py-1 truncate max-w-[100px] whitespace-nowrap">
                                    {policy.minAge} - {policy.maxAge}
                                </td>
                                <td className="border px-2 py-1 max-w-[150px] whitespace-normal">
                                    <div className="max-h-16 overflow-auto whitespace-normal break-words">
                                        {policy.coverageRange}
                                    </div>
                                </td>
                                <td className="border px-2 py-1 max-w-[150px] whitespace-normal">
                                    <div className="max-h-16 overflow-auto whitespace-normal break-words">
                                        {policy.durationOptions}
                                    </div>
                                </td>
                                <td className="border px-2 py-1 max-w-[100px] whitespace-normal">
                                    {policy.basePremiumRate}
                                </td>
                                <td className="border px-2 py-1 whitespace-nowrap">
                                    {policy.policyImage ? (
                                        <img src={policy.policyImage} alt={policy.title} className="w-20 h-auto rounded" />
                                    ) : (
                                        'No image'
                                    )}
                                </td>
                                <td className="border px-2 py-1 text-center min-h-[105px]">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <button onClick={() => handleUpdate(policy._id)} className="text-yellow-500 hover:text-yellow-600">
                                            <FaEdit size={20} />
                                        </button>
                                        <button onClick={() => handleDelete(policy._id)} className="text-red-600 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
                {policies.map((policy) => (
                    <div key={policy._id} className="bg-white rounded shadow p-4 space-y-3">
                        <p><strong>Title:</strong> {policy.title}</p>
                        <p><strong>Category:</strong> {policy.category}</p>
                        <p><strong>Description:</strong> <span className="break-words whitespace-normal">{policy.description}</span></p>
                        <p><strong>Age Range:</strong> {policy.minAge} - {policy.maxAge}</p>
                        <p><strong>Coverage Range:</strong> {policy.coverageRange}</p>
                        <p><strong>Duration Options:</strong> {policy.durationOptions}</p>
                        <p><strong>Base Premium Rate:</strong> {policy.basePremiumRate}</p>
                        <p><strong>Policy Image:</strong> {policy.policyImage ? (
                            <img src={policy.policyImage} alt={policy.title} className="w-40 h-auto rounded" />
                        ) : 'No image'}</p>
                        <div className="flex justify-center gap-6">
                            <button onClick={() => handleUpdate(policy._id)} className="text-yellow-500">
                                <FaEdit size={24} />
                            </button>
                            <button onClick={() => handleDelete(policy._id)} className="text-red-600">
                                <FaTrashAlt size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Add / Update */}
            {showFormModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => {
                                setShowFormModal(false);
                                setSelectedPolicy(null);
                            }}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
                        >
                            &times;
                        </button>

                        {selectedPolicy ? (
                            <UpdatePolicyForm
                                policy={selectedPolicy}
                                onClose={() => {
                                    setShowFormModal(false);
                                    setSelectedPolicy(null);
                                }}
                                onSuccess={fetchPolicies}
                            />
                        ) : (
                            <>
                                <h3 className="text-2xl font-semibold mb-4 text-center">Add New Policy</h3>
                                <Fields setShowFormModal={setShowFormModal} />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAllPolicies;
