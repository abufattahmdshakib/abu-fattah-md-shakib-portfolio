import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="min-h-screen lg:w-2/3 mx-auto pt-24 text-center lg:text-start px-2 ">
            <h1 className="text-white text-5xl font-bold mb-2">Hello, I'm <span className="text-pink-800">Abu Fattah Md Shakib</span></h1>
            <h2 className="text-white text-2xl font-semibold">A Junior Frontend Developer</h2>
            <p className="text-white mt-4 text-lg md:mx-0 font-primary">I work with a deep passion for creating immersive and dynamic web applications. My journey in web development began as a detail-oriented Frontend Developer, driven by curiosity to craft visually appealing and user-friendly websites. Building on a strong foundation in JavaScript, React.js, and Next.js, I have now acquired full proficiency in the MERN (MongoDB, Express.js, React.js, Node.js) stack.

                Throughout my career, I have honed my skills in UI/UX design, ensuring that every project not only meets but exceeds user expectations. From e-commerce platforms to dynamic web applications, I have successfully transformed complex concepts into elegant and functional designs. Proficient in modern frameworks such as React and Vue.js, I continuously work to create seamless and interactive user experiences.

                Collaboration is the core of my work ethic, where creativity and problem-solving converge. Effective communication is the key to successful projects, and I am always eager to share my experience and learn from others.

                As a continuous learner, I am committed to staying at the forefront of the ever-evolving world of web development. Whether experimenting with new technologies or improving my design skills, I always bring fresh perspectives and creative solutions.

                Beyond technical skills, I am dedicated to meeting deadlines, attentive to detail, and passionate about delivering high-quality work. I look forward to applying my frontend and MERN stack skills to exceed client expectations and bring innovative solutions.</p>
            <div class="flex justify-center gap-4 mt-6 lg:justify-start">
                <a class="text-lg text-white rounded border-accent-400 btn btn-outline hover:bg-pink-800 hover:text-white hover:transition-all hover:duration-1000 " href="/#projects">Project</a>
                <a target="_blank" class="text-lg text-white rounded btn bg-pink-800 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white" href="https://drive.google.com/file/d/1YFwnrce3mWQx_VdCcaWugz0L0s7yaNHf/view?usp=sharing">Resume</a>
            </div>
            <div className="mt-5">
                <Link to='/'><button class="text-lg text-white border-none rounded btn bg-pink-800 hover:bg-transparent hover:border-accent-400 hover:transition-all hover:duration-1000 hover:text-white mb-8">Move Home</button></Link>
            </div>
        </div>
    );
};

export default About;