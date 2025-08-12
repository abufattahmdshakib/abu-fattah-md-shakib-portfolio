import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className='text-center pt-32 pb-64 bg-white'>
            <Player
                autoplay
                loop
                src="https://lottie.host/7431fae9-12c1-4fda-b214-2a4f976d7c50/tAtQ3PP4hm.json"
                className='md:w-[700px] '
            >
            </Player>
            <h2 className='md:text-5xl text-black font-bold'>
               404 NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;