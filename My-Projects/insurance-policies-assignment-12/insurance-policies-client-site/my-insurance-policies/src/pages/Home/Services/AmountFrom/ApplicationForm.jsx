import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const healthOptions = [
  "Diabetes",
  "Heart Disease",
  "High Blood Pressure",
  "Cancer",
  "None of the above",
];

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const healthDisclosure = watch("healthDisclosure") || [];

  const onSubmit = async (data) => {
    try {
      if (data.healthDisclosure?.includes("None of the above")) {
        data.healthDisclosure = ["None of the above"];
      }

      const applicationData = {
        title: `Insurance for ${data.fullName}`,
        type: "insurance",
        cost: 0,
        payment_status: "unpaid",
        email: data.email,
        creation_date: new Date().toISOString(),
        status: "Pending",
        details: data,
      };

      const res = await axiosSecure.post("/Application", applicationData);

      if (res.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your application is now pending. Please complete payment.",
        });
      }
    } catch (error) {
      if (error.response?.status === 409) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Application",
          text: "An application with this email already exists.",
        });
      } else {
        console.error("Submission failed:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to submit application. Please try again.",
        });
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Life Insurance Application</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
          <input {...register("fullName", { required: "Full name is required" })} className="input input-bordered w-full mb-2" placeholder="Full Name" />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

          <input {...register("email", { required: "Email is required" })} className="input input-bordered w-full mb-2" placeholder="Email" type="email" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <input {...register("address", { required: "Address is required" })} className="input input-bordered w-full mb-2" placeholder="Address" />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}

          <input {...register("nid", { required: "NID / SSN is required" })} className="input input-bordered w-full mb-2" placeholder="NID / SSN" />
          {errors.nid && <p className="text-red-500">{errors.nid.message}</p>}
        </div>

        {/* Nominee Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Nominee Information</h3>
          <input {...register("nomineeName", { required: "Nominee name is required" })} className="input input-bordered w-full mb-2" placeholder="Nominee Name" />
          {errors.nomineeName && <p className="text-red-500">{errors.nomineeName.message}</p>}

          <input {...register("nomineeRelation", { required: "Relationship is required" })} className="input input-bordered w-full mb-2" placeholder="Relationship" />
          {errors.nomineeRelation && <p className="text-red-500">{errors.nomineeRelation.message}</p>}
        </div>

        {/* Health Disclosure */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Health Disclosure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {healthOptions.map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  {...register("healthDisclosure")}
                  disabled={option !== "None of the above" && healthDisclosure.includes("None of the above")}
                  className="checkbox"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
