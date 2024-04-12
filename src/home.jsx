
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
        <div className="grid sm:grid-cols-3 bg-slate-950 text-white h-10">
            <div className="text-3xl font-semibold">PORTFOLIO</div>
            <div className="flex gap-10 text-xl">
                <button onClick={handleskill} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Skills</button>
                <button onClick={handleproject} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Project</button>
                <button onClick={handlecontact} className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Contact</button>
            </div >
            <button className="mx-8 flex items-center justify-end px-8 flex-wrap ">mode</button>
        </div>
    )
}
export default Home;   