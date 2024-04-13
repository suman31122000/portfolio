import { useState } from "react";
const Home=()=>{
    const handleskill=()=>{
        const skillsElement = document.getElementById('skills');
        skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
    const handleproject=()=>{
        const skillsElement = document.getElementById('projects');
        skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
    const handlecontact=()=>{
        const skillsElement = document.getElementById('contact');
        skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
   
    return(
        <div className="absolute grid sm:grid-cols-3 text-white h-10 flex flex flex-wrap mt-4">
            <div className="text-3xl font-semibold px-7">PORTFOLIO</div>
            <div className="flex gap-10 text-xl items-center justify-center text-center pointer-events-auto">
                <button onClick={handleskill} className="mx-2 mt-0 h-9 w-32 rounded-md  px-10 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-300 hidden sm:flex pointer-events-auto">SKILLS</button>
                <button onClick={handleproject} className="mx-2 mt-0 h-9 w-32 rounded-md  px-8 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-300 hidden sm:flex">PROJECTS</button>
                <button onClick={handlecontact} className="mx-2 mt-0 h-9 w-32 rounded-md px-8 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-300 hidden sm:flex">CONTACT</button>
            </div >
        </div>
    )
}
export default Home;   