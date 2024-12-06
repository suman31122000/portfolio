import { useState, useEffect } from "react";
import Home from "./home";
import SocialLogin from "./profile/profile";
import Resume from "./profile/resume.jsx";

const Landing = () => {
    const [developerType, setDeveloperType] = useState('C++ Developer');

    useEffect(() => {
        const toggleDeveloperType = () => {
            const newType = developerType === 'C++ Developer' ? 'MERN Developer' : 'C++ Developer';
            setDeveloperType(newType);
        };
        const delay = setTimeout(toggleDeveloperType, 1000);
        return () => clearTimeout(delay);
    }, [developerType]);

    return (
        <div className="relative h-screen">
            <div className="sticky inset-0 z-10">
                <Home />
            </div>
            <img src="bgimage.jpg" alt="Background" className="w-full h-full object-cover absolute inset-0 z-0" />
            <div className="absolute inset-0 flex flex-row text-white font-semibold">
                <div className="absolute top-32 left-0"><SocialLogin/></div>
                <div className="w-8/12 flex flex-col justify-center mr-8">
                    <span className="text-2xl md:text-5xl italic text-end">I Am<span className="text-slate-700 sm:text-6xl"> Suman Bando </span></span>
                    <span className="text-3xl md:text-5xl italic text-end">{developerType}</span>
                    {/* <button className="mt-8 md:mt-12 h-9 w-32 ml-[85%] rounded-md px-8 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-300 hidden sm:flex z-10">
                        <a href="https://drive.google.com/file/d/1HBwd2Qf8PBKQC_7tiV4mk9eS0uUy9GQA/view?usp=sharing " className="block w-full h-full">
                            Resume
                        </a>
                    </button> */}
                    <div className="flex justify-center pl-[500px] pt-10">
                    <  Resume/>
                    </div>
                </div>
                <div className="w-6/12"></div>
            </div>
        </div>
    );
}

export default Landing;
