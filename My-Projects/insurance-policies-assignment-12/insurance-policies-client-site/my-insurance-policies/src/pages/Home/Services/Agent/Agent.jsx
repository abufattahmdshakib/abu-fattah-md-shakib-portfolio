
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Agent = () => {
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    district: "",
    why: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axiosSecure.post("/agent-requests", {
        ...formData,
        status: "pending" // 🟡 initial status
      });

      if (res.data.insertedId) {
        Swal.fire("Success", "Request submitted. Awaiting approval.", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          region: "",
          district: "",
          why: ""
        });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to send request", "error");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Helmet>
        <title>Agents</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Agent Request Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input input-bordered w-full" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input input-bordered w-full" required />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input input-bordered w-full" required />
        <input name="region" value={formData.region} onChange={handleChange} placeholder="Region" className="input input-bordered w-full" required />
        <input name="district" value={formData.district} onChange={handleChange} placeholder="District" className="input input-bordered w-full" required />
        <textarea name="why" value={formData.why} onChange={handleChange} placeholder="Why should we approve you?" className="textarea textarea-bordered w-full" required />
        <button type="submit" className="btn btn-primary w-full">Submit Request</button>
      </form>
    </div>
  );
};

export default Agent;
