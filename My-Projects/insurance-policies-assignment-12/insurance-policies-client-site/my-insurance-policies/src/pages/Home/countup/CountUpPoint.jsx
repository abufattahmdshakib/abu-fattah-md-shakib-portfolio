import React from 'react';
import CountUp from "react-countup";

const stats = [  
  {
    title: "Policies Successfully Issued",
    image: "https://i.ibb.co/6Rt9kCGw/medical-support-concept-health-care-600w-600892169.webp",
    count: 8200,
    suffix: " + "
  },
  {
    title: "Families Protected Under Our Plans",
    image: "https://i.ibb.co/0jg3RMr4/download-1.jpg",
    count: 4500,
    suffix: " + "
  },
  {
    title: "Trusted Financial Advisors & Experts",
    image: "https://i.ibb.co/VWWL3TXj/work-addict-people-talking-on-600nw-2007206873.webp",
    count: 75,
    suffix: " + "
  },
  {
    title: "Education Futures Secured for Children",
    image: "https://i.ibb.co/nsDBcr3k/bangladesh-dream-fulfillment-school-hero-03.jpg",
    count: 1200,
    suffix: " + "
  }
];


const CountUpPoint = () => {
    return (
        <div className="px-2 lg:p-5">
            <h2 className="text-2xl bg-gradient-to-r from-blue-600 to-purple-800 md:w-[600px] rounded-lg py-2 mx-auto font-bold text-center mb-12 text-white">Trusted by Thousands, Powered by Care</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4  mb-12 lg:container lg:mx-auto">
                {stats.map((stat, index) => (

                    <div
                        key={index}
                        className="bg-gray-100 rounded-2xl w-60 mx-auto shadow-2xl flex items-center gap-4">
                        <div>
                            <div className="w-full object-fill p-2">
                                <img className="rounded-lg" src={stat.image} alt="" />
                            </div>
                            <div className="text-2xl text-blue-600 my-2 text-center font-bold">
                                <CountUp
                                    end={stat.count}
                                    duration={5}
                                    separator=","
                                    suffix={stat.suffix || " "}
                                    enableScrollSpy
                                    scrollSpyDelay={300}
                                />
                            </div>
                            <div className="text-purple-800  text-center mb-4 font-medium text-xl">{stat.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountUpPoint;