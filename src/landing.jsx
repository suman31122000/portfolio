import { useState, useEffect } from "react";

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
        <div className="bg-gray-900 h-[90vh] text-white font-semibold flex flex-col items-center justify-center">
            <div className="text-3xl md:text-5xl italic text-center">I Am Suman Bando</div>
            <div className="text-3xl md:text-5xl italic text-center">{developerType}</div>
            <button className="mt-8 md:mt-12 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">
                <a href="https://docs.google.com/document/d/1Iua_W5iVfrPA5D8CC4fw1PoLU_gEkNVJ/edit?usp=drive_link&ouid=110023528186454540801&rtpof=true&sd=true" className="block w-full h-full">
                    Resume
                </a>
            </button>
        </div>
    );
}

export default Landing;
