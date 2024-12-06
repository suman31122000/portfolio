const Address = () => {
    return (
      <div className="profile-card w-[400px] h-[550px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-4 transition-all duration-300 group text-gray-950">
        <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-2">
          <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
            {/* Increased size of profile image */}
            <img
              className="z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
              id="avatar"
              src="pp.jpg" // Assuming the image is in public/images folder
              alt="Profile"
              style={{ width: "200px", height: "200px" }} // Increased image size
            />
            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
          </div>
        </div>
        <div className="headings *:text-center *:leading-4">
          <p className="text-2xl font-serif font-semibold text-[#434955]">SUMAN BANDO</p> {/* Increased font size */}
          <p className="text-sm font-semibold text-[#434955]">DEVELOPER</p>
        </div>
        <div className="w-full items-center justify-center flex">
          <ul className="flex flex-col items-start gap-3 pb-4">
            <li className="flex items-center gap-2">
              <svg
                id="phone"
                viewBox="0 0 24 24"
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
              </svg>
              <p>+917428789074</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="18"
                width="18"
                id="mail"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20"></path>
                <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20"></path>
              </svg>
              <p>SUMANBANDO31122000@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="18"
                width="18"
                id="globe"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2">
                  <path
                    data-name="globe"
                    d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"
                  ></path>
                </g>
              </svg>
              <p>https://sumanportfolio31.netlify.app/</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                id="map"
                viewBox="0 0 16 16"
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
                  fill="#444"
                ></path>
              </svg>
              <p>
                Saharada Krishna Nilaya 7th B Cross Rd, Industrial Area, Stage 2, BTM Layout, Bengaluru, Karnataka 560076
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Address;
  