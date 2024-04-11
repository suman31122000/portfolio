

function Contact(){
    return(
        <div className="grid grid-cols-2 gap-4 h-[100vh] bg-gray-900 ">
        <div className="flex flex-col justify-center text-white">
            <div className="flex flex-col justify-center items-center my-5">
                <span>Address</span>
                <span>Babapath Hurhuru Hazaribag </span>
                <span>Jharkhand,825301</span>
            </div >
            <div className="flex flex-col justify-center items-center my-5">
                <span>Lets Talk</span>
                <span>+91 7428789074</span>
            </div>
            <div className="flex flex-col justify-center items-center my-5">
                <span>Email</span>
                <span>sumanbando31122000@gmail.com</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <span className="text-[5vh] my-10 text-white">CONNECT ME</span>
            <form className="flex flex-col text-white border-4 rounded-lg">
                <div className="flex flex-col  justify-center items-center h-[15vh] w-[70vh]">
                    <span className="my-1">TELL ME YOUR NAME</span>
                    <input type="text" placeholder="Full Name"  className="h-[5vh] w-[60vh] my-4 border-none bg-slate-400 "></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>ENTER YOUR EMAIL</span>
                <input type="email" placeholder="Eg exampe@gmail.com "  className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>ENTER YOUR PHONE NUMBER</span>
                <input type="text" placeholder="Eg +184515444587" className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>MESSAGE</span>
                <input type="text" placeholder="Write Us a message" className="h-[20vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <button className=" mx-[190px] my-2  w-32 rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">SEND</button>
            </form>
        </div>
        </div>
    )
}
export default Contact;