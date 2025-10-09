/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
const Slider = ({ singlepic }) => {
    const { image, imageOne, imageTwo } = singlepic

    return (
        <div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${imageOne})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${imageTwo})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="text-4xl md:text-6xl font-bold text-center mb-5">Find Your <span className='text-[#ff4605]'>Dream</span> Car</h1>
                                <p className='md:text-base lg:text-base font-semibold mb-5 lg:mb-10 text-center text-[#842929]'>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                                <button className='bg-[#ff635c] px-3 py-2 md:px-5 md:py-3 rounded-lg text-white text-center'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;