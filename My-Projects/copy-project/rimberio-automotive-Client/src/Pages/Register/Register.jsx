/* eslint-disable no-unused-vars */
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from '../../Providers/Authprovider';





const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { createUser, logOut, handleUpdateProfile, setLoading } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, photo, accepted)




        if (!/^(?=.*[A-Z]).+$/
            .test(password)) {
            toast.error("Password must be One capital characters");
            return
        }
        if (!/^(?=.*[\W_]).+$/.test(password)) {
            toast.error("Password must be One special characters");
            return
        }
        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }



        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name, photo)
                    .then(() => {

                        logOut()

                        navigate("/login")
                    })
                toast.success('User Create Successfully')


            })
            .catch(error => {
                toast.error('Email Already In use try another one')
                setLoading(false)
            })
    }
    return (
        <div className="bg-[#234756] pb-[180px] pt-9">
            <div className=" w-[400px] md:w-[752px]  mx-auto rounded-md bg-[#fff] pt-10 md:pt-[76px]">
                <h1 className=" text-2xl md:text-4xl font-semibold text-center text-[#234756] ">Register Your Account</h1>
                <hr className="md:w-[606px] h-1 mt-7 md:mt-12 mb-7 bg-black md:mb-12 mx-auto" />
                <form onSubmit={handleRegister} className="pl-1 md:pl-24">
                    <div className="mb-6">
                        <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Your Name</h2>
                        <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px] border border-black text-base font-normal text-[#9F9F9F] rounded" type="text" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-6">
                        <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Photo URL</h2>
                        <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px] border border-black text-base font-normal text-[#9F9F9F] rounded" type="text" name="photo" placeholder="Enter your Photo URL" />
                    </div>
                    <div className="mb-6">
                        <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Email address</h2>
                        <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px] border border-black text-base font-normal text-[#9F9F9F] rounded" type="email" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className="mb-6">
                        <h2 className=" text-base md:text-xl font-semibold text-black mb-4">Password</h2>
                        <div className='relative '>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-[390px] md:w-[558px] border border-black text-base font-normal text-[#9F9F9F] rounded" type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" id="" />
                            <span className="absolute right-4 md:right-28 top-6 rtl:left-0 rtl:right-auto " onClick={() => { setShowPassword(!showPassword) }} >
                                {
                                    showPassword ? <AiOutlineEyeInvisible className='text-xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-xl'></AiOutlineEye>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-7">
                        <input type="checkbox" name="terms" className="checkbox checkbox-success" required />
                        <p className="text-black font-semibold text-base">Accept Term & Conditions</p>
                    </div>
                    <div className="pb-20">
                        <button className="bg-[#005eff] w-[390px] md:w-[558px] py-4 text-center text-xl font-semibold text-white rounded">Register</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;