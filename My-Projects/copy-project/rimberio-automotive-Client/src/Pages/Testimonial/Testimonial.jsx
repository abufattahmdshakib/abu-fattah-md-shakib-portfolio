/* eslint-disable react/no-unescaped-entities */
import { MdVerified } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Testimonial = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <section className="bg-[#f2f2f4cc] ">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-[#272530] capitalize md:text-4xl mb-2 ">Testimonials</h1>
                    <hr className=" w-48 md:w-56 mx-auto mt-2 h-1 bg-slate-950" />
                    <p className="my-6 text-center text-[#a3a3a6] ">
                        HAPPY CLIENTS ABOUT US
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-4">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl bg-[#fff] ">
                            <p className=" text-base text-black font-bold capitalize px-6 pt-16 "> "Impeccable service, quality cars. <span className='text-purple-600 font-extrabold'>Rimberio Automotive</span> exceeded expectations. Found my dream car effortlessly. Highly recommend!" </p>
                            <div className="flex items-center justify-center mt-20 mb-14">
                                <img className="object-cover w-10 h-10 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/HLyYS6c/young-woman-choosing-car-car-showroom.jpg' alt="" />
                                <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">Jessica Mann</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl bg-[#fff] ">
                            <p className=" text-base text-black font-bold capitalize px-6 pt-16 "> "Smooth process, knowledgeable staff. <span className='text-purple-600 font-extrabold'>Rimberio Automotive</span> made car buying a pleasure. Thrilled with my purchase!" </p>
                            <div className="flex items-center justify-center mt-20 mb-14">
                                <img className="object-cover w-10 h-10 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/TqsfN9C/couple-talking-with-showroom-agent.jpg' alt="" />
                                <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl bg-[#fff] ">
                            <p className=" text-base text-black font-bold capitalize px-6 pt-16 "> "Top-notch selection, expert advice. <span className='text-purple-600 font-extrabold'>Rimberio Automotive</span> is the go-to for quality cars. Extremely satisfied with my experience!"</p>
                            <div className="flex items-center justify-center mt-20 mb-14">
                                <img className="object-cover w-10 h-10 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/xf1VFCF/woman-enjoying-her-financially-independence-while-buying-car.jpg' alt="" />
                                <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1">Linda Movrizza</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="3000" className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl bg-[#fff] ">
                            <p className=" text-base text-black font-bold capitalize px-6 pt-16 "> "Efficient, transparent, superb service. <span className='text-purple-600 font-extrabold'>Rimberio Automotive</span> delivered beyond my expectations. Love my new car!" </p>
                            <div className="flex items-center justify-center mt-20 mb-14">
                                <img className="object-cover w-10 h-10 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/bKMwP2H/man-woman-closing-deal.jpg' alt="" />
                                <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1">Jessica Mann</h1>
                                <MdVerified className="text-xl text-blue-700"></MdVerified>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;