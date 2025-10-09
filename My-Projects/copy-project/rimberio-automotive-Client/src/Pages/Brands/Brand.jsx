/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { brandName, image } = brand;
    return (
        <div>
            <Link to={`/brand/${brandName}`}><div className="card card-compact bg-[#04153B] shadow-xl">
                <figure><img className="rounded-b-xl" src={image} alt="brand" /></figure>
                <h1 className="text-3xl lg:text-5xl font-bold text-center text-white mb-10 mt-5">{brandName}</h1>
            </div></Link>
        </div>
    );
};

export default Brand;