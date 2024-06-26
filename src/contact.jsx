import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ss5ahze', 'template_baicdfm', e.target, '7q2C4UIVjyrfgrMPB')
            .then((result) => {
                alert("Data Sent");
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
        setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div id="contact" className="grid sm:grid-cols-2  grid-cols-1 gap-4 h-full  bg-gray-900 ">
            <div className="flex flex-col justify-center text-white mt-10">
                <div className="flex flex-col justify-center items-center my-5">
                    <span>Address</span>
                    <span>Babapath Hurhuru Hazaribag </span>
                    <span>Jharkhand,825301</span>
                </div >
                <div className="flex flex-col justify-center items-center my-5 ">
                    <span>Lets Talk</span>
                    <span >+91 7428789074</span>
                </div>
                <div className="flex flex-col justify-center items-center my-5">
                    <span>Email</span>
                    <span>sumanbando31122000@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center my-10">
                <span className="text-[5vh] my-10 text-white">CONNECT ME</span>
                <form onSubmit={sendEmail} ref={form} className="flex flex-col text-white border-4 rounded-lg">
                    <div className="flex flex-col justify-center items-center">
                        <span className="my-1">TELL ME YOUR NAME</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="h-[5vh] w-[60vh] my-4 border-none bg-slate-400 "></input>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span>ENTER YOUR EMAIL</span>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Eg exampe@gmail.com " className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span>ENTER YOUR PHONE NUMBER</span>
                        <input type="text" value={formData.phoneNumber} name="phoneNumber" onChange={handleChange} placeholder="Eg +184515444587" className="h-[5vh] w-[60vh] my-4 bg-slate-400"></input>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span>MESSAGE</span>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write Us a message" className="h-[20vh] w-[60vh] my-4 bg-slate-400 resize-none"></textarea>
                    </div>
                    <button type="submit" className="mx-[190px] my-2 w-32 rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
