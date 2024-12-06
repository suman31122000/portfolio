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
                    <span>saharada Krishna Nilaya
                    7th B Cross Rd, Industrial Area, Stage 2, BTM Layout, Bengaluru</span>
                    <span>Karnataka 560076</span>
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
      <form onSubmit={sendEmail} ref={form} className="flex flex-col text-white border-4 rounded-lg p-4 bg-gray-100 h-[90vh] w-[80vh] overflow-auto">
        <div className="flex flex-col justify-center items-center mb-4">
          <label htmlFor="name"  className="text-gray-950 ">NAME</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="h-[5vh] w-[70%] my-4 border-none bg-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div className="flex flex-col justify-center items-center  mb-4">
          <label htmlFor="email" className="text-gray-950 ">EMAIL</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Eg example@gmail.com"
            className="h-[5vh] w-[70%] my-4 bg-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <label htmlFor="phoneNumber" className="text-gray-950 ">PHONE NUMBER</label>
          <input
            id="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Eg +184515444587"
            className="h-[5vh] w-[70%] my-4 bg-slate-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <label htmlFor="message" className="text-gray-950 ">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Us a message"
            className="h-[12vh] w-[70%] my-4 bg-slate-400 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <button
          type="submit"
          className="mx-auto w-32 rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800"
        >
          SEND
        </button>
      </form>
    </div>
        </div>
    );
}

export default Contact;
