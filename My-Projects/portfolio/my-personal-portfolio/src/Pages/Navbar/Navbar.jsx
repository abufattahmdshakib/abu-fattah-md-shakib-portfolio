import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="#FFF" viewBox="0 0 24 24" id="menu"><g data-name="Layer 2"><g data-name="menu"><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"></rect></g></g></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'><li className="text-lg font-bold"><a>Home</a></li></NavLink>
                            <li className="text-lg font-bold"><a href="/#projects">Project</a></li>
                            <li className="text-lg font-bold"><a>Blog</a></li>
                            <NavLink to='/about'><li className="text-lg font-bold"><a>About</a></li></NavLink>
                            <li className="text-lg font-bold"><a>Artical</a></li>

                        </ul>
                    </div>
                    <div className="flex lg:gap-2 items-center">
                        <Player className="w-24"
                            autoplay
                            loop
                            src="https://lottie.host/9c5cf3cd-a27d-45a1-abed-85a81b70df0a/vko2bg0FsY.json"
                        >
                        </Player>
                        <h1 className="text-xl font-bold  text-white " style={{ whiteSpace: "nowrap"}}>Abu Fattah Md Shakib</h1>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <NavLink to='/'><li className="text-lg font-bold"><a>Home</a></li></NavLink>
                        <li className="text-lg font-bold"><a href="/#projects">Project</a></li>
                        <li className="text-lg font-bold"><a>Blog</a></li>
                        <NavLink to='/about'><li className="text-lg font-bold"><a>About</a></li></NavLink>
                        <li className="text-lg font-bold"><a>Artical</a></li>
                    </ul>
                    <div>
                        <a className="btn" href="/#contact">Let's Connect</a>
                    </div>
                </div>
                <div className="navbar-end hidden md:block lg:hidden">
                    <a className="btn" href="/#contact">Let's Connect</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;