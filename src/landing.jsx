import { useState,useEffect } from "react";
const Landing=()=>{
    const [developerType, setDeveloperType] = useState('C++ Developer');

    useEffect(() => {
        const toggleDeveloperType = () => {
            const newType = developerType === 'C++ Developer' ? 'MERN Developer' : 'C++ Developer';
            setDeveloperType(newType);
        };
        const delay = setTimeout(toggleDeveloperType, 1000);
        return () => clearTimeout(delay);
    }, [developerType]);
    return(

            <div className="bg-gray-900 h-[100vh]  text-white font-semibold flex flex-col items-centre justify-center ">
                <div className="text-[7vh] italic mx-[65vh]" >I Am Suman Bando</div>
                <div className="text-[7vh] italic mx-[70vh]">{developerType}</div>
                <button className="mx-[100vh] my-10 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">
    <a href="https://docs.google.com/document/d/1Iua_W5iVfrPA5D8CC4fw1PoLU_gEkNVJ/edit?usp=drive_link&ouid=110023528186454540801&rtpof=true&sd=true" class="block w-full h-full">
        Resume
    </a>
</button>

            </div>
    
    )
}
export default Landing;