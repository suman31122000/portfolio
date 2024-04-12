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
        <div className="grid sm:grid-cols-3 bg-slate-950 text-white h-10 flex flex flex-wrap">
            <div className="text-3xl font-semibold px-7">PORTFOLIO</div>
            <div className="flex gap-10 text-xl">
                <button onClick={handleskill} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800 hidden sm:flex">SKILLS</button>
                <button onClick={handleproject} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800 hidden sm:flex">PROJECTS</button>
                <button onClick={handlecontact} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800 hidden sm:flex">CONTACT</button>
            </div >
            <button className="mx-8 flex items-center justify-end px-8 flex-wrap hidden sm:flex">mode</button>
        </div>
    )
}
export default Home;   