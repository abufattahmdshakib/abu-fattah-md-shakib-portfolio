import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectOneDetails = () => {
    return (
        <div className="pt-10 container mx-auto overflow-x-hidden">
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
                                <span className="text-xl font-bold underline">Empowering Communities, Inspiring Change : </span> 🌿
                                Through our diverse social development initiatives, we strive to build a conscious, compassionate, and sustainable society. From self-employment and entrepreneurship workshops that empower youth, to clean-up drives and tree plantation campaigns that protect our environment, each activity plays a vital role in community growth. We organize blood donation camps to save lives, health check-ups for senior citizens to ensure well-being, and water and sanitation projects to promote access to safe resources. Our road safety education and hygiene awareness drives encourage responsible, healthy living. Every initiative reflects our mission — to create positive change, inspire participation, and unite people for a better future. 🌍✨
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
                {/* Agent */}
                {/* <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">Agent : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/7ys3rfh/Screenshot-2023-12-11-154134.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Add Property Page</span> : Introducing our streamlined Add Property Page, featuring an intuitive form for effortless property addition. Input property details seamlessly, including title, location, image upload, agent details, and price range. This user-friendly form ensures a straightforward and efficient process, making property listing a breeze. Simplify your property management experience with our intuitive tools. 🏠📝✨</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co/dQ4WYd5/Screenshot-2023-12-11-154150.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">My Added Properties Page : </span> Explore the My Added Properties Page, tailored for agents seeking seamless property management. Effortlessly navigate through all properties added by the agent, ensuring a comprehensive view of their portfolio. A structured table provides an organized display of essential property details, streamlining information access. Admin-managed verification status ensures reliability, with the admin controlling property verification through a clear ✅ symbol. Dynamic controls further empower agents, offering update and delete buttons for efficient property management. These features provide a user-friendly experience, allowing agents to maintain and refine their property listings with ease. Elevate your property management journey with our intuitive tools. 🌐📊✅🔄🗑✨
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/R0SYFGr/Screenshot-2023-12-12-162903.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium"> <span className="text-xl font-bold underline">My Added Properties Page : </span> Welcome to the Requested/Offered Properties Page, featuring a clear and organized Tabular View 🗂 for easy reference to all property offers. Agents wield the power of streamlined decision-making with Accept and Reject Buttons ✅❌. The Accept Button empowers agents to efficiently approve offers, initiating the property transaction process seamlessly. Meanwhile, the Reject Button allows agents to decline offers with a simple click, providing a streamlined approach to managing property offers. This intuitive interface enhances agent control, ensuring a straightforward and efficient process for handling requested and offered properties. Elevate your transaction experience with our dynamic tools, designed for simplicity and effectiveness. ✨🏡✅❌🔄</h1>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* User */}
                {/* <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                    <h2 className="text-xl font-semibold underline text-white mb-10">User : </h2>
                    <div className="container mx-auto space-y-12">
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/z8yqKN3/Screenshot-2023-12-12-163429.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h3 className="text-white font-medium"><span className="text-xl font-bold underline">Wishlist</span> : Welcome to the View Wishlisted Properties 🌐💼 page, where your property dreams come to life. Explore a user-friendly table showcasing detailed information on all wishlisted properties, ensuring a comprehensive view. For added convenience, engage with your desired listings using the "Make an Offer" button, facilitating seamless communication with sellers. Simplify your decision-making process with the "Remove" button, offering users the flexibility to curate their wishlist effortlessly. Transitioning to the Property Bought Page 🏠🛍, celebrate your successful transactions. This dedicated page serves as a digital record of your purchased properties, creating a personalized archive of your real estate journey. Immerse yourself in the joy of homeownership, knowing that your bought properties are neatly cataloged for your reference. Experience the ease of property management with our thoughtful and user-centric features. 🌟🏡💫</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src="https://i.ibb.co/5cZzkGW/Screenshot-2023-12-12-163446.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div className="text-white font-medium">
                                <span className="text-xl font-bold underline">Advertisement Section : </span> Discover the View Properties with Offers 📑💸 page, offering a transparent overview of your purchased properties and their offer status. A detailed table showcases property information, ensuring clarity in your real estate portfolio. Seamlessly conclude transactions with the "Pay" button, streamlining the payment process for added convenience. When an agent accepts your offer, the payment method is automatically enabled, providing a secure and efficient way to complete your transaction. Enjoy the ease of managing your property transactions, with our user-centric features designed to enhance your experience in the world of real estate. 🏡✨💳💫
                            </div>
                        </div>
                        <div className="flex gap-5 lg:gap-20 items-center flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                            <img src="https://i.ibb.co/wWJBCxV/Screenshot-2023-12-12-163656.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                            <div>
                                <h1 className="text-white font-medium"> <span className="text-xl font-bold underline">My Reviews Page : </span> Welcome to the My Reviews Page 📝👀, your dedicated space for effortless review management. Explore a user-friendly table presenting comprehensive review details, ensuring a convenient overview of your feedback. Seamlessly navigate through your reviews with the "View and Manage Reviews" feature, providing a clear and organized display. Enhance your control with the "Delete" button, empowering you to manage your reviews with a simple click. This streamlined approach allows you to curate your feedback, ensuring a tailored and reflective representation of your experiences. Experience the power of personalized review management, designed to provide you with an intuitive and user-centric platform for overseeing your valuable feedback. ✨</h1>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default ProjectOneDetails;