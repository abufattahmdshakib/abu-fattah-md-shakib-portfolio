/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, setLoading, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        

        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }


        signIn(email, password)
            .then(result => {
                console.log('Navigating to:', location?.state ? location.state : "/");
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "User logged Successfully", "success");
            })




            .catch(error => {
                const errormsg = error.message;
                toast.error(errormsg);
                setLoading(false)
                e.target.reset()
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "User logged Successfully", "success");
            })
            .catch(error => {
                const errormsg = error.message;
                toast.error(errormsg);
            })
    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "User logged Successfully", "success");

            })
            .catch(error => {
                const errormsg = error.message;
                toast.error(errormsg);
            })
    }
    return (
        <div className="bg-[#234756]">
            <div className="container mx-auto pt-9 pb-[180px]">
                <div className=" w-[400px] md:w-[752px] h-[780px] mx-auto bg-[#fff] shadow-xl rounded-md pt-10 md:pt-[76px]">
                    <h1 className=" text-2xl md:text-4xl font-semibold text-center text-[#234756] ">Login Your Account</h1>
                    <hr className="md:w-[606px] h-1 mt-7 md:mt-12 mb-7 bg-black md:mb-12 mx-auto" />
                    <form onSubmit={handleLogin} className=" pl-1 md:pl-24">
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Email address</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px]  border border-black text-base font-normal text-[#403F3F] rounded" type="email" name="email" placeholder="Enter your email address" id="" />
                        </div>
                        <div className="mb-6">
                            <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Password</h2>
                            <div className='relative '>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px] border border-black text-base font-normal text-[#403F3F] rounded" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" id="" />
                                <span className="absolute right-4 md:right-28 top-6 rtl:left-0 rtl:right-auto " onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible className='text-xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-xl'></AiOutlineEye>
                                    }
                                </span>
                            </div>
                            <label className="label mt-1">
                                <a href="#" className="label-text-alt link link-hover text-[#005eff] text-base md:text-xl">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <button className="bg-[#005eff] w-[397px] md:w-[558px] py-4 text-center text-xl font-semibold text-white rounded">Login</button>
                        </div>

                    </form>
                    <p className="text-center mt-7"><span className="text-base font-semibold text-[#403F3F]">Dont’t Have An Account ? </span><Link className="text-base font-semibold text-[#005eff]" to="/register">Create an account</Link></p>
                    <div className="w-full flex items-center justify-between  lg:px-24 mt-4">
                        <hr className="w-full h-[3px] bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full h-[3px] bg-gray-400  " />
                    </div>
                    <div className="flex items-center justify-center mt-5 gap-7">

                        <button onClick={handleGoogleSignIn} className=" rounded flex items-center gap-3 bg-base-300 px-3 py-2 cursor-pointer">
                            <FcGoogle className='text-xl'></FcGoogle>
                            <span className='text-[#403F3F] text-base font-medium'>Google</span>
                        </button>
                        <button onClick={handleGithubSignIn} className=" rounded flex items-center gap-3 bg-base-300 px-3 py-2 cursor-pointer">
                            <AiFillGithub className='text-xl'></AiFillGithub>
                            <span className='text-[#403F3F] text-base font-medium'>Github</span>
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;