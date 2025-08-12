import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxios from '../../../hooks/useAxios';
import { Helmet } from 'react-helmet'; 

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState('');
  const [firebaseError, setFirebaseError] = useState('');
  const axiosInstance = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';

  const onSubmit = async (data) => {
    setFirebaseError(''); // reset error

    try {
      const result = await createUser(data.email, data.password);
      console.log(result.user);

      // Save user in database
      const userInfo = {
        email: data.email,
        role: 'user',
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString()
      };

      await axiosInstance.post('/users', userInfo);

      // Update Firebase  Profile
      const userProfile = {
        displayName: data.name,
        photoURL: profilePic
      };

      await updateUserProfile(userProfile);
      console.log('Profile updated');
      navigate(from);
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        setFirebaseError('This email is already registered. Please login or use another email.');
      } else {
        setFirebaseError('Registration failed. Try again later.');
      }
    }
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append('image', image);

    const uploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;
    const res = await axios.post(uploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Your Name</label>
            <input type="text"
              {...register('name', { required: true })}
              className="input" placeholder="Your Name" />
            {errors.name && <p className='text-red-500'>Name is required</p>}

            {/* Profile Picture */}
            <label className="label">Your Profile Picture</label>
            <input type="file"
              onChange={handleImageUpload}
              className="input" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email"
              {...register('email', { required: true })}
              className="input" placeholder="Email" />
            {errors.email && <p className='text-red-500'>Email is required</p>}

            {/* Password */}
            <label className="label">Password</label>
            <input type="password"
              {...register('password', { required: true, minLength: 6 })}
              className="input" placeholder="Password" />
            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least 6 characters</p>}

            {/* Firebase Error Message */}
            {firebaseError && <p className="text-red-600 mt-2">{firebaseError}</p>}

            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-primary text-black mt-4">Register</button>
          </fieldset>

          <p><small>Already have an account? <Link className="btn btn-link" to="/login">Login</Link></small></p>
        </form>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
