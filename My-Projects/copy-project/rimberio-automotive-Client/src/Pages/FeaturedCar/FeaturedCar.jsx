
import './car.css'
const FeaturedCar = () => {
    return (
        <div>
            <div className="container mx-auto pt-10 pb-10">
                <h1 className="text-3xl font-semibold text-center ">Recent Launched Car</h1>
                <p className="text-base text-[#403F3F] mb-5 mt-2 text-center">Explore the latest car models with detailed specs, pricing, and review.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-0 px-3">

                    <div className="wrapper bg-gray-400 antialiased text-gray-900">
                        <div className='image-container'>

                            <img src="https://i.ibb.co/LhfF0rM/peakpx-26.jpg" alt=" random imgee" className="w-full h-[350px] object-cover object-center rounded-lg shadow-md image pulse-grow " />

                            <div className="relative px-4 -mt-16  ">
                                <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            BMW
                                        </span>
                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            <a href="">#RoadWarrior</a>
                                        </div>
                                    </div>

                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Mercedes-Benz S-Class</h4>

                                    <div className="mt-1">
                                        Price: $90000

                                    </div>
                                    <div className="mt-4">
                                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                        <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="wrapper bg-gray-400 antialiased text-gray-900">
                        <div className='image-container'>

                            <img src=" https://i.ibb.co/DL8146W/peakpx-24.jpg" alt=" random imgee" className="w-full h-[350px] object-cover object-center rounded-lg shadow-md image pulse-grow" />

                            <div className="relative px-4 -mt-16  ">
                                <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            Ford
                                        </span>
                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            <a href="">#DieselPowered </a>
                                        </div>
                                    </div>

                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Ford Mustang</h4>

                                    <div className="mt-1">
                                        Price: $45000

                                    </div>
                                    <div className="mt-4">
                                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                        <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="wrapper bg-gray-400 antialiased text-gray-900">
                        <div className='image-container'>

                            <img src=" https://i.ibb.co/YQYYRSp/denys-nevozhai-QD-8l-8-u-Jg-unsplash.jpg" alt=" random imgee" className="w-full h-[350px]  object-cover object-center rounded-lg shadow-md image pulse-grow" />

                            <div className="relative px-4 -mt-16  ">
                                <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            Honda
                                        </span>
                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            <a href="">#RoadWarrior</a>
                                        </div>
                                    </div>

                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">BMW X5</h4>

                                    <div className="mt-1">
                                        Price: $60000

                                    </div>
                                    <div className="mt-4">
                                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                        <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="wrapper bg-gray-400 antialiased text-gray-900">
                        <div className='image-container'>

                            <img src=" https://i.ibb.co/XxxwYNW/peakpx-16.jpg" alt=" random imgee" className="w-full h-[350px]  object-cover object-center rounded-lg shadow-md image pulse-grow" />

                            <div className="relative px-4 -mt-16  ">
                                <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-pink-400  text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            Tesla
                                        </span>
                                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            <a href="">#DieselPowered </a>
                                        </div>
                                    </div>

                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Tesla Model 3</h4>

                                    <div className="mt-1">
                                        Price: 40000

                                    </div>
                                    <div className="mt-4">
                                        <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                        <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCar;