import { useLoaderData } from "react-router-dom";
import BrandItem from "./BrandItem";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";


const BrandItems = () => {
    const products = useLoaderData()

    const [slider, setSlider] = useState([])

    useEffect(() => {
        fetch('https://rimberio-automotive-server.vercel.app/slider')
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])

    if (!products || products.length === 0) {
        return <div className="text-center text-2xl mt-20 font-extrabold text-violet-800">No data available for this brand.</div>;
    }

    return (
        <div className="bg-[#CCCCFF]">
            <div>
                <div className="mb-5">
                    {
                        slider.map(singlepic => <Slider key={singlepic._id} singlepic={singlepic}></Slider>)
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 px-3 lg:px-0 container mx-auto mb-10">
                {
                    products.map(product => <BrandItem key={product._id} product={product}></BrandItem>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandItems;