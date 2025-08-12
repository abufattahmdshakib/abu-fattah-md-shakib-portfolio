import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { imageUpload } from '../../layouts/Utlits';

const UpdatePolicyForm = ({ policy, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({ ...policy });
  const [previewImage, setPreviewImage] = useState(policy.policyImage || null);
  const [uploading, setUploading] = useState(false);
  const [highlightedFields, setHighlightedFields] = useState({});

  useEffect(() => {
    setFormData({ ...policy });
    setPreviewImage(policy.policyImage || null);
    setHighlightedFields({});
  }, [policy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      setHighlightedFields((hf) => ({
        ...hf,
        [name]: policy[name] !== value,
      }));
      return updated;
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setUploading(true);
      try {
        const imageUrl = await imageUpload(file);
        setFormData((prev) => ({ ...prev, policyImage: imageUrl }));
        setHighlightedFields((hf) => ({
          ...hf,
          policyImage: policy.policyImage !== imageUrl,
        }));
        toast.success('✅ Image uploaded successfully!');
      } catch (err) {
        toast.error('❌ Failed to upload image.');
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://insurance-policies-server-site.vercel.app/policies/${policy._id}`, formData);
      toast.success('✅ Policy updated successfully!');
      onSuccess();
      onClose();
    } catch (error) {
      toast.error('❌ Failed to update policy.');
      console.error(error);
    }
  };

  const highlightClass = (field) =>
    highlightedFields[field] ? 'border-2 border-yellow-400 bg-yellow-50' : '';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 text-gray-700 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold text-center">Update Policy</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${highlightClass('title')}`}
        placeholder="Policy Title"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${highlightClass('category')}`}
        required
      >
        <option value="" disabled>Select Category</option>
        <option value="Health">Health</option>
        <option value="Life">Life</option>
        <option value="Travel">Travel</option>
        <option value="Vehicle">Vehicle</option>
        <option value="Home">Home</option>
      </select>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className={`w-full p-2 border rounded ${highlightClass('description')}`}
        required
      />

      <div className="flex gap-4">
        <input
          name="minAge"
          type="number"
          value={formData.minAge}
          onChange={handleChange}
          placeholder="Min Age"
          className={`w-1/2 p-2 border rounded ${highlightClass('minAge')}`}
        />
        <input
          name="maxAge"
          type="number"
          value={formData.maxAge}
          onChange={handleChange}
          placeholder="Max Age"
          className={`w-1/2 p-2 border rounded ${highlightClass('maxAge')}`}
        />
      </div>

      <input
        name="coverageRange"
        value={formData.coverageRange}
        onChange={handleChange}
        placeholder="Coverage Range"
        className={`w-full p-2 border rounded ${highlightClass('coverageRange')}`}
      />

      <input
        name="durationOptions"
        value={formData.durationOptions}
        onChange={handleChange}
        placeholder="Duration Options"
        className={`w-full p-2 border rounded ${highlightClass('durationOptions')}`}
      />

      <input
        name="basePremiumRate"
        type="number"
        step="0.01"
        value={formData.basePremiumRate}
        onChange={handleChange}
        placeholder="Base Premium Rate"
        className={`w-full p-2 border rounded ${highlightClass('basePremiumRate')}`}
      />

      <div>
        <label className="block mb-1 font-medium">Upload Policy Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />
        {previewImage && <img src={previewImage} alt="Preview" className="mt-2 w-32 rounded shadow" />}
        {uploading && <p className="text-sm text-blue-600 mt-1">Uploading image...</p>}
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={uploading}
        >
          {uploading ? 'Updating...' : 'Update Policy'}
        </button>
      </div>
    </form>
  );
};

export default UpdatePolicyForm;
