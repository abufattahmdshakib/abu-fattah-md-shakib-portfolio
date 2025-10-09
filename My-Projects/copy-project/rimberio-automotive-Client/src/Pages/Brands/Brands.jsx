/* eslint-disable react/prop-types */

import Brand from "./Brand";



const Brands = ({products}) => {
    

    return (
        <div className="shadow-inner shadow-slate-400">
            <h1 className="text-4xl text-center font-bold mb-2 pt-7">Our Trusted Brands</h1>
            <p className="text-base font-medium text-center text-[#403F3F]">Explore top car brands known for style ,performance and innovation in our platform</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto pt-10 pb-10 px-3 md:px-0">
                {
                    products?.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;