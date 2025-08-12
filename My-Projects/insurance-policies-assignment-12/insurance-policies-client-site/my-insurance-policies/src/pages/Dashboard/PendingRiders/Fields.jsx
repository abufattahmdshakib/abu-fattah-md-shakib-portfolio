import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { imageUpload } from '../../../layouts/Utlits';

const Fields = ({ setShowFormModal }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    minAge: '',
    maxAge: '',
    coverageRange: '',
    durationOptions: '',
    basePremiumRate: '',
    policyImage: ''
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setUploading(true);
      try {
        const imageUrl = await imageUpload(file);
        setFormData((prev) => ({ ...prev, policyImage: imageUrl }));
      } catch (err) {
        Swal.fire('❌ Error!', 'Failed to upload image.', 'error');
        console.error(err);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.policyImage) {
      Swal.fire('⏳ Please wait', 'Image is still uploading.', 'warning');
      return;
    }

    try {
      await axios.post('https://insurance-policies-server-site.vercel.app/addadmin', formData);
      Swal.fire('✅ Success!', 'Policy added successfully!', 'success');
      setFormData({
        title: '',
        category: '',
        description: '',
        minAge: '',
        maxAge: '',
        coverageRange: '',
        durationOptions: '',
        basePremiumRate: '',
        policyImage: ''
      });
      setPreviewImage(null);
      setShowFormModal(false);
    } catch (error) {
      console.error(error);
      Swal.fire('❌ Failed!', 'Failed to add policy.', 'error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-gray-600 bg-gray-200 p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add New Policy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Policy Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex gap-4">
          <input
            name="minAge"
            type="number"
            placeholder="Min Age"
            value={formData.minAge}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
            required
          />
          <input
            name="maxAge"
            type="number"
            placeholder="Max Age"
            value={formData.maxAge}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
            required
          />
        </div>

        <input
          name="coverageRange"
          placeholder="Coverage Range"
          value={formData.coverageRange}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="durationOptions"
          placeholder="Duration Options"
          value={formData.durationOptions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          name="basePremiumRate"
          type="number"
          step="0.01"
          placeholder="Base Premium Rate"
          value={formData.basePremiumRate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <div>
          <label className="block mb-1 font-medium">Upload Policy Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 w-48 h-auto rounded shadow"
            />
          )}
          {uploading && (
            <p className="text-sm text-blue-600 mt-1">Uploading image...</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit Policy'}
        </button>
      </form>
    </div>
  );
};

export default Fields;
