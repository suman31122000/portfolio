const Resume=()=>{
    const handleclick=()=>{
        window.location='https://drive.google.com/file/d/1Gr7LtLmQTmeouiPxsh1haQWi69OZTOYC/view?usp=sharing'
    }
    return (
<button  onClick={handleclick}
  class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    class="w-5 h-5 animate-bounce"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    ></path>
  </svg>
</button>

    )
}
export default Resume;