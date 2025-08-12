import React from 'react';

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description, image } = service;

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden max-w-md mx-auto">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
        />
      )}

{/* just show  */}
      <div className="p-8">
        {Icon && (
          <div className="text-5xl text-primary mb-5">
            <Icon />
          </div>
        )}
        <h3 className="text-2xl font-extrabold text-primary mb-3 hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
