

const Education = () => {
    return (
        <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1  gap-5 md:px-14 px-4 lg:px-0">
                {/* <div className=" rounded text-center py-5 border-2 border-blue-400 shadow-2xl  shadow-gray-300/50">
                    <h1 className="text-xl font-semibold text-white">Master of Social Sciences (MSS)</h1>
                    <h3 className="text-base font-medium text-white">Department Of Economics</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2021 </p>
                    <p className="text-base font-medium text-white">National University Of Bangladesh </p>
                </div> */}
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50 text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white"> Bachelor of Science (BSc)</h1>
                    <h3 className="text-base font-medium text-white">Department Of EEE</h3>
                    <p className="text-base font-medium text-white">Current Semester: 8th out of 10   </p>
                    <p className="text-base font-medium text-white">Southeast University </p>
                </div>
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50 text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white">Diploma in Engineering</h1>
                    <h3 className="text-base font-medium text-white">Electronics Technology</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2023 </p>
                    <p className="text-base font-medium text-white">Rajshahi Polytechnic Institute</p>
                    <p className="text-base font-medium text-white">Bangladesh Technical Education Board</p>
                </div>
                <div className="border-2 border-blue-400 shadow-2xl  shadow-gray-300/50 text-center rounded py-5">
                    <h1 className="text-xl font-semibold text-white">Secondary School Certificate (SSC)</h1>
                    <h3 className="text-base font-medium text-white">Science</h3>
                    <p className="text-base font-medium text-white">Passing Year : 2018 </p>
                    <p className="text-base font-medium text-white">Nazipur Govt Model High School</p>
                    <p className="text-base font-medium text-white">Board : Rajshahi </p>
                </div>
            </div>
        </div>
    );
};

export default Education;