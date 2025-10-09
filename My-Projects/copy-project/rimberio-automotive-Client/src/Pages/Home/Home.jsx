import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";
import FeaturedCar from "../FeaturedCar/FeaturedCar";
import Footer from "../Footer/Footer";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "./Banner";
import Partners from "../TrustedPartners/Partners";


const Home = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <Banner></Banner>
            <Brands products={products}></Brands>
            <FeaturedCar></FeaturedCar>
            <Testimonial></Testimonial>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;