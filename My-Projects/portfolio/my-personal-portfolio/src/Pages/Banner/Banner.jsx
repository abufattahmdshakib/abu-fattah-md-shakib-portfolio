import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="container mx-auto">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                <div className="flex items-center justify-between flex-col-reverse gap-5 lg:gap-0 lg:flex-row text-center lg:text-start p-5">
                    <div className=" w-full lg:w-5/12">
                        <h1 className="text-5xl font-bold mb-5 text-white">Hi, I Am Abu Fattah Md Shakib</h1>
                        <h3 className="text-2xl font-semibold mb-5 text-white">Junior Frontend-Developer</h3>
                        <p className="mb-5 font-normal text-base text-white">✨ Young Trailblazer in Full Stack Development 💻 | Mastering the art of code from UI/UX magic to server-side wizardry. Fluent in HTML, CSS, JavaScript, React,Firebase, Node.js, MongoDB. Committed to turning ideas into reality and making a mark in the digital realm. Let's build brilliance together! 🌐🚀</p>
                        <div class="flex justify-center gap-4 mt-6 lg:justify-start">
                            <a class="text-lg text-white rounded border-accent-400 btn btn-outline hover:bg-pink-800 hover:text-white hover:transition-all hover:duration-1000 " href="/#projects">Project</a>
                            <a target="_blank" class="text-lg text-white rounded btn bg-pink-800 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white" download="" href="https://drive.google.com/file/d/1b-t4hSDMBb-x5HwNdWvwwJDFm-daAB_g/view?usp=sharing">Resume</a>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="w-full max-w-2xl mx-auto lg:mx-0 -mt-20"
                            src="https://i.ibb.co.com/VYJMrqpp/Adobe-Express-file.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;