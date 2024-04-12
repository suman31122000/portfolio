import { useState } from "react";


function Contact(){
    const [emaildata,setemail]=useState('');
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phoneNumber: '',
        message: ''
    });

    const handlechange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setFormData(prevstate=>({...prevstate,
        [name]:value}));
    };
    const email=(e)=>{
        e.preventDefault();
        setemail(e.target.value);
       
    }
    const submit=(e)=>{
        e.preventDefault();
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sumanbando31122000@gmail.com",
            Password : "042CC135759F1C32A2C2E67D805B0041EF5D",
            To : 'official31122000@gmail.com',
            From : 'sumanbando31122000@gmail.com',
            Subject : "This is the subject",
            Body : JSON.stringify(formData),
        }).then(
          message => alert(message)
        ),
        (error)=>{
            console.error('error sending email',error);
        };
    }
    return(
        <div id="contact" className="grid grid-cols-2 gap-4 h-[100vh] bg-gray-900 ">
        <div className="flex flex-col justify-center text-white">
            <div className="flex flex-col justify-center items-center my-5">
                <span>Address</span>
                <span>Babapath Hurhuru Hazaribag </span>
                <span>Jharkhand,825301</span>
            </div >
            <div className="flex flex-col justify-center items-center my-5">
                <span>Lets Talk</span>
                <span >+91 7428789074</span>
            </div>
            <div className="flex flex-col justify-center items-center my-5">
                <span>Email</span>
                <span>sumanbando31122000@gmail.com</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <span className="text-[5vh] my-10 text-white">CONNECT ME</span>
            <form onSubmit={submit}  className="flex flex-col text-white border-4 rounded-lg">
                <div className="flex flex-col  justify-center items-center h-[15vh] w-[70vh]">
                    <span className="my-1">TELL ME YOUR NAME</span>
                    <input type="text" name="name" onChange={handlechange} placeholder="Full Name"  className="h-[5vh] w-[60vh] my-4 border-none bg-slate-400 "></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>ENTER YOUR EMAIL</span>
                <input onChange={email} name="email" type="email" placeholder="Eg exampe@gmail.com "  className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>ENTER YOUR PHONE NUMBER</span>
                <input type="text" name="phonenumber" onChange={handlechange} placeholder="Eg +184515444587" className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <div className="flex flex-col  justify-center items-center">
                <span>MESSAGE</span>
                <input type="text" name="message" onChange={handlechange} placeholder="Write Us a message" className="h-[20vh] w-[60vh] my-4 bg-slate-400"></input>
                </div>
                <button className=" mx-[190px] my-2  w-32 rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">SEND</button>
            </form>
        </div>
        </div>
    )
}
export default Contact;