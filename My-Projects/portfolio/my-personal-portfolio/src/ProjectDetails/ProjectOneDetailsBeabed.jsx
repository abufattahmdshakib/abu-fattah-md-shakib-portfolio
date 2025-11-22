import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectOneDetailsBeabed = () => {
    return (
        <div className="pt-10 container mx-auto overflow-x-hidden">
            <Link to='/'><div className="flex items-center btn btn-outline w-40 border-white ml-4 mb-5 lg:mb-0">
                <p className="text-white">Back Home</p>
                <IoMdArrowRoundBack className="text-white text-2xl" />
            </div></Link>
            <div>
                <h1 className="text-white text-center text-2xl lg:text-4xl mb-5">Details of Beaded</h1>
                <div className="mx-auto mb-10 border-b border-red-700 w-96 lg:w-[530px] dark:border-gray-400"></div>

                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">Home : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/bj80XDjY/Screenshot-2025-10-11-195312.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Navbar</span> : Create an intuitive navbar for seamless user navigation, enhancing the user experience. Incorporate captivating visuals to engage and attract users, ensuring a visually appealing interface. Elevate website's design, combining functionality with aesthetics for a compelling and user-friendly online experience.</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/mCCTcZ6X/Screenshot-2025-10-12-002534.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Filters and Sorting Overview : </span> In the shop section, users can easily browse and filter products using the Filters panel, including Search, Collections (like HOT DEALS, EID COLLECTION, BOISHAKHI COLLECTION, or All Items), and Categories. The Sort By dropdown allows products to be reordered by Newest, Best Selling, Price: Low to High, or Price: High to Low. Each item, such as the Flower Child Barbie Bracelet, is displayed as a card, and users can see the total count, e.g., Showing 47 Items. The filters and sorting dynamically update the product cards in real-time, ensuring a smooth, intuitive, and personalized shopping experience.
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/xS60MYpz/Screenshot-2025-10-11-201021.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Add to Cart & Wishlist : </span> On each product card, users can view the title, description, and actionable buttons like Add to Cart and Add to Wishlist. Clicking Add to Cart adds the item to the shopping cart once; subsequent clicks will not duplicate the product. The Add to Wishlist button works as a toggle — clicking once adds the item to the wishlist, and clicking again removes it, allowing users to easily manage their favorite products. This ensures a smooth, intuitive, and user-friendly shopping experience.
                            </div>
                        </div>
                    </div>
                </section>
                {/* Admin */}
                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/jPvsyzrF/Screenshot-2025-10-11-201152.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">My Profile :</span> Clicking on the user image opens the My Profile page, featuring a sidebar navbar with Profile Info, My Addresses, My Orders, and My Wishlist. Each section displays relevant details, allowing users to view and manage personal information, saved addresses, order history, and favorite products in one organized and intuitive interface.</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/xS6XM9X8/Screenshot-2025-10-11-201241.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Summary & Checkout: </span>The Your Cart page displays all items in the cart, showing Item, Quantity (QTY), Price, and available Actions for each product. The Summary section provides a clear breakdown: Sub-Total, Delivery Fee, Discount, and the Grand Total (e.g., ৳3545). Clicking the Proceed to Checkout button takes the user to the next page, allowing them to complete their order and make payment seamlessly.
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/0pJY2vzF/Screenshot-2025-10-11-201419.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium"> <span className="text-xl font-bold underline">Checkout Steps: </span>
                                    The checkout process has three steps: Delivery Info to enter shipping details, Review Order to verify items and totals, and Confirmation to finalize the purchase. This ensures a smooth and intuitive checkout experience.</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/HDzgMLQj/Screenshot-2025-10-12-004428.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Secure Authentication with Firebase: </span> The Sign In page lets users log in via Google or email and password, with options to reset forgotten passwords and sign up for a new account. All authentication is powered by Firebase, ensuring secure, reliable, and real-time user account management for a seamless login experience.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectOneDetailsBeabed;