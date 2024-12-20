import React from "react";
import { useNavigate } from "react-router";

const SocialLogin = () => {
const navigate=useNavigate();
  return (
    <div className="flex flex-col gap-2 pl-4 space-x-4">
      {/* Twitter Icon */}
      <div className="flex items-center justify-center p-2  rounded-full">
        <svg
          // xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
          height="1.7em"
          className="svgIcontwit"
        >
          {/* <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /> */}
        </svg>
      </div>

      
      <div onClick={()=>{window.location='https://www.linkedin.com/in/suman-bando-9ba706209/'}} className="flex items-center justify-center p-2 hover:from-pink-500 hover:to-yellow-500 rounded-full bg-gradient-to-r">
  <svg
    fill="white"
    className="svgIcon"
    viewBox="0 0 24 24"
    height="1.5em"
    width="1.5em"
  >
    <path d="M2.25 0C1.01 0 0 1.01 0 2.25v19.5C0 22.99 1.01 24 2.25 24h19.5C22.99 24 24 22.99 24 21.75V2.25C24 1.01 22.99 0 21.75 0H2.25zm8.625 17.25H7.5v-9h3.375v9zm-1.687-10.125c-1.125 0-1.875-.75-1.875-1.875s.75-1.875 1.875-1.875 1.875.75 1.875 1.875-.75 1.875-1.875 1.875zm12.125 10.125h-3.375v-4.5c0-1.125-.375-1.875-1.375-1.875-.75 0-1.125.375-1.375.75-.062.187-.062.375-.062.625v4.5h-3.375V9h3.375v1.5h.062c.75-.75 1.125-1.125 1.875-1.125 1.125 0 2.625.75 2.625 2.625v5.25z"/>
  </svg>
</div>




<div onClick={()=>{window.location='https://leetcode.com/u/sumanbando31122000/'}} className="flex items-center justify-center p-2 bg-gradient-to-r hover:bg-blue-700 rounded-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    fill="white"
    height="1.6em"
    width="1.6em"
  >
    <path d="M492.5 0c-270.6 0-492.5 221.9-492.5 492.5 0 270.6 221.9 492.5 492.5 492.5 270.6 0 492.5-221.9 492.5-492.5C985 221.9 763.1 0 492.5 0zm0 895.2c-223.5 0-404.7-181.2-404.7-404.7 0-223.5 181.2-404.7 404.7-404.7 223.5 0 404.7 181.2 404.7 404.7 0 223.5-181.2 404.7-404.7 404.7zm-118.3-274.2c-24.6 0-44.4-19.8-44.4-44.4s19.8-44.4 44.4-44.4c24.6 0 44.4 19.8 44.4 44.4s-19.8 44.4-44.4 44.4zm236.3 0c-24.6 0-44.4-19.8-44.4-44.4s19.8-44.4 44.4-44.4c24.6 0 44.4 19.8 44.4 44.4s-19.8 44.4-44.4 44.4zm-118.3-137.9c-36.4 0-66.2-29.8-66.2-66.2s29.8-66.2 66.2-66.2c36.4 0 66.2 29.8 66.2 66.2s-29.8 66.2-66.2 66.2z"/>
  </svg>
</div>



     
      <div onClick={()=>{window.location='https://github.com/suman31122000'}} className="flex items-center justify-center p-2 hover:bg-gray-500 rounded-full">
        <svg
          fill="white"
          viewBox="0 0 496 512"
          height="1.6em"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.3 17.6 20.4 17.6 38.9 0 28.5-.3 55.4-.3 61.4 0 6.4 4.5 14.3 17.3 12.1C426.3 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8z" />
        </svg>
      </div>
    </div>
  );
};

export default SocialLogin;
