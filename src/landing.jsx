import { useState, useEffect } from "react";
import Home from "./home";

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
            <div className="absolute inset-0 z-10">
                <Home />
            </div>
            <img src="bgimage.jpg" alt="Background" className="w-full h-full object-cover absolute inset-0 z-0" />
            <div className="absolute inset-0 flex flex-row text-white font-semibold">
                <div className="w-8/12 flex flex-col justify-center mr-8">
                    <span className="text-2xl md:text-5xl italic text-end">I Am<span className="text-slate-700 sm:text-6xl"> Suman Bando </span></span>
                    <span className="text-3xl md:text-5xl italic text-end">{developerType}</span>
                    <button className="mt-8 md:mt-12 h-9 w-32 ml-[85%] rounded-md px-8 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-300 hidden sm:flex z-10">
                        <a href="https://docs.google.com/document/d/1Iua_W5iVfrPA5D8CC4fw1PoLU_gEkNVJ/edit?usp=drive_link&ouid=110023528186454540801&rtpof=true&sd=true" className="block w-full h-full">
                            Resume
                        </a>
                    </button>
                </div>
                <div className="w-6/12"></div>
            </div>
        </div>
    );
}

export default Landing;
