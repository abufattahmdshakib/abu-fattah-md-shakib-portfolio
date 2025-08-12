import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/gif/login.gif'
import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
            <div>
                <ProFastLogo></ProFastLogo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-full rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;