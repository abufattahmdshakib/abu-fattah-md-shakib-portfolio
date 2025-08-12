import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('Login successful!'); // ✅ show toast
                navigate(from); // ✅ navigate to intended page or home
            })
            .catch(error => {
                console.log(error);
                toast.error('Login failed. Please check your credentials.'); // optional error toast
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password', { required: true, minLength: 6 })}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                        />
                        {errors.password?.type === 'required' && (
                            <p className="text-red-500 text-sm mt-1">Password is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>
                        )}
                    </div>

                    <div className="text-right text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white tracking-wide hover:shadow-md"
                    >
                        Login
                    </button>

                    <p className="text-center text-purple-600 text-sm mt-4">
                        New here?{' '}
                        <Link to="/register" state={{ from }} className="text-blue-600 font-medium hover:underline">
                            Create an account
                        </Link>
                    </p>
                </form>
                <div className="divider divider-neutral text-gray-900">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
