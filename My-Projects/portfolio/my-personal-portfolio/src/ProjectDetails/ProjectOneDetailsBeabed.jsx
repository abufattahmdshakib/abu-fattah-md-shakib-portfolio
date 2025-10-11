import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectOneDetailsBeabed = () => {
    return (
        <div className="pt-10 container mx-auto">
            <Link to='/'><div className="flex items-center btn btn-outline w-40 border-white ml-4 mb-5 lg:mb-0">
                <p className="text-white">Back Home</p>
                <IoMdArrowRoundBack className="text-white text-2xl" />
            </div></Link>
            <div>
                <h1 className="text-white text-center text-2xl lg:text-4xl mb-5">Details of Ekattor</h1>
                <div className="mx-auto mb-10 border-b border-red-700 w-96 lg:w-[530px] dark:border-gray-400"></div>

                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">Home : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/TxGxgTyT/Screenshot-2025-08-12-024013.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Navbar</span> : Create an intuitive navbar for seamless user navigation, enhancing the user experience. Incorporate captivating visuals to engage and attract users, ensuring a visually appealing interface. Elevate website's design, combining functionality with aesthetics for a compelling and user-friendly online experience.</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/m5yHKYBN/Screenshot-2025-08-12-024346.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Advertisement Section : </span> Elevate your property browsing experience with our Advertisement Section 🏡. Discover enticing admin-verified property cards, providing a direct route to comprehensive details. Explore homes effortlessly and make informed decisions, ensuring a seamless journey from discovery to finding your dream property. Your ideal home is just a click away!
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/216cp3c9/Screenshot-2025-08-12-024558.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium">Welcome to our Latest User Review Section 🌟! Experience real-time credibility with dynamic displays of recent user reviews. Instantly gauge the community's sentiments, helping you make informed decisions. Dive into firsthand experiences, creating a trustworthy environment that enhances your confidence in our products or services.</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Admin */}
                <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">Admin : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/CsM5WVhN/Screenshot-2025-08-12-024751.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Manage Properties</span> : Welcome to the Manage Properties Page, where efficiency meets control. Explore all properties added by agents effortlessly, ensuring a seamless navigation experience through our user-friendly interface. A structured table provides key details such as title, location, agent, email, and price range, ensuring organized access to vital property information. For heightened admin oversight, verification and rejection buttons empower administrators to manage property statuses with a simple click – a dynamic feature for maintaining quality control and ensuring accuracy. Elevate your property management experience with our intuitive tools, designed for both agents and administrators alike.✅🏡❌</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/39Sn4p72/Screenshot-2025-08-12-025000.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Create Event: </span> Create Event:
                                Welcome to the Create Event page, where efficiency meets control. Adding new events is seamless and straightforward through our user-friendly interface. You can quickly input essential details such as event title, type, description, meeting location, start date, and thumbnail image with ease and accuracy.A structured form ensures that all critical event information is captured properly, making event management and oversight more organized and effective. For enhanced administrative control, options for verification and rejection are provided to maintain quality and accuracy.⚙👥🧑‍💻
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co.com/dsQyS3Dw/Screenshot-2025-08-12-025620.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium"> <span className="text-xl font-bold underline">Joined Event: </span>
                                    Welcome to your Joined Events section, where all the events you have registered for are conveniently organized in one place. This area serves as your personalized hub to track your active participation, view detailed event information, and stay updated with any important changes or announcements.You can effortlessly browse through your upcoming and past events, monitor event statuses, and access relevant details such as dates, locations, and hosts. Our platform ensures that you receive timely notifications and reminders so that you never miss an opportunity or update. 📝🗑✨</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co.com/Gv1XT1Mc/Screenshot-2025-08-12-025947.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Contact Us : </span> Contact Us!
                                We’re here to listen and assist you with any questions, feedback, or inquiries you may have. Please fill out the form with your full name, a valid email address, and your message. Whether you need support, want to share your thoughts, or have suggestions, we’re eager to hear from you.Simply provide your details and write your message clearly in the space provided. Once submitted, our team will review your message and get back to you as soon as possible. We value your communication and look forward to connecting with you!
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectOneDetailsBeabed;