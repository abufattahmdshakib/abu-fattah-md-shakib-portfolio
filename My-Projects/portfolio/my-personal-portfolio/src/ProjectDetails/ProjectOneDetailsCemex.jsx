import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectOneDetailsCemex = () => {
    return (
        <div className="pt-10 container mx-auto overflow-x-hidden">
            <Link to='/'><div className="flex items-center btn btn-outline w-40 border-white ml-4 mb-5 lg:mb-0">
                <p className="text-white">Back Home</p>
                <IoMdArrowRoundBack className="text-white text-2xl" />
            </div></Link>
            <div>
                <h1 className="text-white text-center text-2xl lg:text-4xl mb-5">Details of Cemex</h1>
                <div className="mx-auto mb-10 border-b border-red-700 w-96 lg:w-[530px] dark:border-gray-400"></div>

                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">DashBoard Home : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/ZzC1TqLt/Screenshot-2025-10-11-195138.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Navbar</span> : Create an intuitive navbar for seamless user navigation, enhancing the user experience. Incorporate captivating visuals to engage and attract users, ensuring a visually appealing interface. Elevate website's design, combining functionality with aesthetics for a compelling and user-friendly online experience.</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/fz5YC6Zn/Screenshot-2025-10-11-200226.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Smarter Date Management  </span> : The Cemex Admin Dashboard Calendar offers a powerful and efficient way to manage dates with dual calendar functionality. It features two interactive calendars — one for selecting the start date (day, month, year) and another for selecting the end date (day, month, year). Once both dates are chosen, Cemex automatically displays all the dates within that range, allowing admins to easily track events, plan schedules, and analyze time-based data. Designed for clarity and control, this system ensures smooth and accurate date management for any workflow.
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/NdydTmd9/Screenshot-2025-10-11-200319.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Interactive Data by Division</span> : The Cemex Rechart provides a dynamic visualization of revenue data across various customer segments and divisions. It comes with a filter button for each division, allowing users to quickly switch between views. By clicking on a division (e.g., Dhaka, Sylhet, Chattogram) or a customer segment (e.g., Small Customers, Big Retailers, Logistics), the chart updates in real-time to display the corresponding revenue data. This interactive feature helps admins analyze performance, compare divisions, and make informed business decisions efficiently.</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Admin */}
                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/39YS0yRZ/Screenshot-2025-10-11-200433.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Dynamic Column Management</span> : The Cemex table offers flexible control over columns using the Manage Row checkbox feature. Admins can easily show or hide specific columns by toggling the checkboxes. To enhance the user experience, smooth animations are applied when columns appear or disappear, making the interaction more intuitive and visually appealing. This functionality allows for customized table views, helping users focus on the data that matters most while keeping the interface clean and organized.</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/0VzKKhrY/Screenshot-2025-10-11-200531.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Dynamic Page Control </span> : The Manage Page Data feature allows admins to control page content efficiently, similar to how columns are managed in the table. Users can show or hide sections, cards, or data blocks as needed. Smooth animations are applied when elements appear or disappear, maintaining a visually appealing and intuitive experience. This functionality ensures that users can customize their page view, focus on relevant information, and keep the dashboard organized and user-friendly.
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/B5CMrnGK/Screenshot-2025-10-11-200744.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium"> <span className="text-xl font-bold underline">Smooth Navigation </span>: The Cemex Pagination feature allows users to navigate through large sets of data efficiently. It includes Back and Next buttons, numbered page links (1, 2, 3 … 25), and a “Results per page” selector to control how many entries are displayed at once (e.g., 10). This ensures a clean, organized, and user-friendly interface, making it easy for admins to browse through data without feeling overwhelmed. Smooth transitions and intuitive controls enhance the overall user experience.</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/BH05vncw/Screenshot-2025-10-11-200622.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Chat with AI Assistant </span> : Clicking Chat with AI Assistant opens a chat box where users can interact with the AI. Inside the chat, users can create charts, visualize data, and get instant insights. The Info button displays detailed information, while the Clear Chat button resets the chat and clears all charts, ensuring a clean and organized workspace. This combined functionality makes the assistant interactive, informative, and easy to use for analysis and decision-making.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectOneDetailsCemex;