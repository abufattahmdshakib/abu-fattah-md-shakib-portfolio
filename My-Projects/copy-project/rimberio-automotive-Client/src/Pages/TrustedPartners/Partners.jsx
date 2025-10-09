import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className="pb-5">
            <div className="container mx-auto flex items-center gap-3 mb-3 mt-5 px-1 lg:px-0">
                <h1 className="text-base font-semibold flex-shrink-0">Our Trusted Partners</h1>
                <hr className="h-1 bg-gray-400 flex-1" />
            </div>
            <Marquee className="pt-5 pb-5" pauseOnHover={true} speed={50}>
                <img className="mr-12" src="https://i.ibb.co/2cgZY80/company-logo-01.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NjnBXV5/company-logo-03.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NrKLnfF/company-logo-05.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/zHhG5cS/company-logo-06.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/2cgZY80/company-logo-01.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/LZGx8gy/company-logo-02.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NjnBXV5/company-logo-03.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/pQrLHdn/company-logo-04.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/NrKLnfF/company-logo-05.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/zHhG5cS/company-logo-06.png" alt="" />
            </Marquee>
        </div>
    );
};

export default Partners;