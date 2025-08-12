import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div data-aos="zoom-in"  data-aos-duration="3000" className="card w-full bg-white shadow-md border hover:shadow-lg transition-all">
      <div className="card-body flex flex-col sm:flex-row items-start gap-4">
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
        <div className="w-full h-px sm:w-px sm:h-full bg-gray-500"></div>        <div>
          <h3 className="card-title text-black text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;