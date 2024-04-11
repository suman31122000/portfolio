const Home=()=>{
    return(
        <div className="grid sm:grid-cols-3 bg-slate-950 text-white h-10">
            <div className="text-3xl">PORTFOLIO</div>
            <div className="flex gap-10 text-xl">
                <button className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Skills</button>
                <button className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Project</button>
                <button className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">Contact</button>
            </div>
            <button className="mx-8 flex items-center justify-end px-8 flex-wrap ">mode</button>
        </div>
    )
}
export default Home;   