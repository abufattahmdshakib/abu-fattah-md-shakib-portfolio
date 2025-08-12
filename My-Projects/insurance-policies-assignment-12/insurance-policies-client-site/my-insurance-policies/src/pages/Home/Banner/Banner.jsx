import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import bannerImg1 from '../../../assets/banner/1.png';
import bannerImg2 from '../../../assets/banner/2.png';
import bannerImg3 from '../../../assets/banner/3.png';
import bannerImg4 from '../../../assets/banner/4.png';
import bannerImg5 from '../../../assets/banner/5.png';
import bannerImg6 from '../../../assets/banner/6.png';
import bannerImg7 from '../../../assets/banner/7.png';
import bannerImg8 from '../../../assets/banner/8.png';
import bannerImg9 from '../../../assets/banner/9.png';

const bannerImages = [
  bannerImg1, bannerImg2, bannerImg3,
  bannerImg4, bannerImg5, bannerImg6,
  bannerImg7, bannerImg8, bannerImg9,
];

const Banner = () => {
  return (
    <div className="w-full mt-20 mb-10 rounded-2xl overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={600}
        stopOnHover
        swipeable
        emulateTouch
      >
        {bannerImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[80vh] object-cover rounded-2xl"
            />
            <p className="legend custom-legend">Banner {index + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
