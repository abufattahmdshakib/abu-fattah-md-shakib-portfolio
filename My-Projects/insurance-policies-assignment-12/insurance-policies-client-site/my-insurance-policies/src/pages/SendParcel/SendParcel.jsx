import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const healthOptions = ["Diabetes", "Heart Disease", "High Blood Pressure", "Cancer", "None of the above"];

const SendParcel = () => {
  const methods = useForm({ mode: "onChange" });
  const { register, handleSubmit, watch, formState: { errors } } = methods;

  const axiosSecure = useAxiosSecure();
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState(null);
  const navigate = useNavigate();

  const calculatePremium = ({ age, gender, coverage, duration, smoker }) => {
    let baseRate = 5;
    if (age < 25) baseRate *= 0.8;
    else if (age <= 40) baseRate *= 1;
    else if (age <= 55) baseRate *= 1.5;
    else baseRate *= 2;

    if (gender === "male") baseRate *= 1.1;
    if (smoker === "yes") baseRate *= 1.7;

    const coverageInThousands = coverage * 100;
    const annual = (baseRate * coverageInThousands) / 1000;
    const monthly = annual / 12;

    return {
      monthly: monthly.toFixed(2),
      annual: annual.toFixed(2),
    };
  };

  const handleNext = () => {
    const data = methods.getValues();
    const age = parseInt(data.age);
    const coverage = parseFloat(data.coverage);
    const duration = parseInt(data.duration);

    if (age < 18 || coverage <= 0 || duration <= 0) {
      alert("Please provide valid quote information.");
      return;
    }

    const premiums = calculatePremium({
      age,
      gender: data.gender,
      coverage,
      duration,
      smoker: data.smoker,
    });

    setQuote(premiums);
    setStep(2);
  };

  const onSubmit = async (data) => {
    try {
      if (data.healthDisclosure?.includes("None of the above")) {
        data.healthDisclosure = ["None of the above"];
      }

      const application = {
        type: "insurance",
        cost: quote.annual,
        payment_status: "unpaid",
        email: data.email,
        creation_date: new Date().toISOString(),
        status: "Pending",
        details: data,
      };

      const res = await axiosSecure.post("/SendParcel", application);
      if (res.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your application is now pending. Please complete payment.",
        });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong!",
      });
    }
  };

  const healthDisclosure = watch("healthDisclosure") || [];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mt-28 mx-auto p-6 bg-gray-200 rounded shadow-md space-y-6">

        {step === 1 && (
          <>
            <h2 className="text-3xl text-black font-bold mb-4 text-center">Step 1: Get a Quote</h2>

            <input type="number" placeholder="Age Must Be Up To 18" {...register("age", { required: true, min: 18 })} className="input input-bordered w-full mb-2" />
            <select {...register("gender", { required: true })} className="select select-bordered w-full mb-2">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="number" step="0.01" placeholder="Coverage Amount (in lakhs)" {...register("coverage", { required: true })} className="input input-bordered w-full mb-2" />
            <input type="number" placeholder="Duration (years)" {...register("duration", { required: true })} className="input input-bordered w-full mb-2" />
            <select {...register("smoker", { required: true })} className="select select-bordered w-full mb-2">
              <option value="">Smoker?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <div className="text-center">
              <button type="button" onClick={handleNext} className="btn btn-primary text-black">Next</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-3xl text-black font-bold mb-4 text-center">Step 2: Application Form</h2>

            <input {...register("fullName", { required: true })} placeholder="Full Name" className="input input-bordered w-full mb-2" />
            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full mb-2" />
            <input {...register("address", { required: true })} placeholder="Address" className="input input-bordered w-full mb-2" />
            <input {...register("nid", { required: true })} placeholder="NID / SSN" className="input input-bordered w-full mb-2" />

            <h3 className="text-xl text-black font-semibold mb-2">Nominee Information</h3>
            <input {...register("nomineeName", { required: true })} placeholder="Nominee Name" className="input input-bordered  w-full mb-2" />
            <input {...register("nomineeRelation", { required: true })} placeholder="Relationship" className="input input-bordered w-full mb-2" />

            <h3 className="text-xl text-black font-semibold mb-2">Health Disclosure</h3>
            <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-2 mb-4">
              {healthOptions.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={option}
                    {...register("healthDisclosure")}
                    disabled={option !== "None of the above" && healthDisclosure.includes("None of the above")}
                    className="checkbox text-green-700 border-primary"
                  />
                  {option}
                </label>
              ))}
            </div>

            {quote && (
              <div className="bg-primary text-white p-4 rounded text-center">
                <p>Estimated Premium:</p>
                <p><strong>Monthly:</strong> ৳{quote.monthly}</p>
                <p><strong>Annual:</strong> ৳{quote.annual}</p>
              </div>
            )}

            <div className="flex justify-between">
              <button type="button" className="btn btn-outline text-blue-700 hover:text-black" onClick={() => setStep(1)}>Back</button>
              <button type="submit" className="btn btn-success">Submit Application</button>
            </div>
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default SendParcel;
