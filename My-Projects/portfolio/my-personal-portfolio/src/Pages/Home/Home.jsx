import Projects from "../../Projects/Projects";
import Banner from "../Banner/Banner";
import ContactUs from "../Contact Us/ContactUs";
import Education from "../Education/Education";
import EducationExperience from "../EducationExperience.jsx/EducationExperience";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewsLetter from "../Newsletter/NewsLetter";
import Tooling from "../Tools/Tooling";


const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <Education></Education> */}
            <EducationExperience></EducationExperience>
            <Tooling></Tooling>
            <Projects></Projects>
            <ContactUs></ContactUs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;