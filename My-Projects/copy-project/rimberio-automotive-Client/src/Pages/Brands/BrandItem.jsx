/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandItem = ({ product }) => {
    const { _id, image, rating, price, type, brandName, name } = product

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }

    return (
        <div>
            <div className="card  bg-[#2980B9] shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">
                        {name}<div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h1 className="text-lg font-bold text-white">Brand : {brandName}</h1>
                    <p className="text-lg font-semibold text-white">Type : {type}</p>
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold text-white">Price : {price}</p>
                        <div className="star-rating text-rose-700">{stars}</div>
                    </div>
                    <div className="card-actions justify-center mt-3">
                        <Link to={`/productdetails/${_id}`}><button className="text-white rounded btn-sm btn-accent">Details</button></Link>
                        <Link to={`/updateproduct/${_id}`}> <button className="text-white rounded btn-sm btn-accent">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandItem;