

const Banner = () => {

    return (
        <div className="bg-gradient-to-r from-gray-300 to-cyan-200 relative">
            <div className="flex items-center justify-center flex-col-reverse lg:flex-row text-center p-5">
                <div className=" w-full lg:w-1/2">
                    <h1 className="mb-5 text-6xl text-fuchsia-900 font-bold">New Arrival </h1>
                    <p className="mb-5">Explore a curated selection of top-quality cars at Rimberio Automotive. <br />From stylish sedans to rugged SUVs, find the perfect vehicle to suit your lifestyle.</p>
                    <button className="btn btn-success">Book Now</button>
                </div>
                <div className="text-center w-full lg:w-1/2">
                    <img className="" src="https://i.ibb.co/6YJJ4Wc/share-now-fx-Xm1-ECs-V7k-unsplash-removebg.png" alt="" />
                </div>
            </div>
            <div className="absolute top-5 md:top-8 lg:top-10 right-10 md:right-24 lg:right-36">
            <img className="w-24 md:w-32 lg:w-48" src="https://i.ibb.co/BjJLf2w/sale-with-twenty-percent-discount-presents-removebg.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;