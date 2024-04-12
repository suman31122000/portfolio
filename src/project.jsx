const Project = () => {
  return (
      <div id="projects" className="flex flex-col bg-slate-900">
          <div className="flex flex-col justify-center items-center text-white text-[4vh] my-10">
              <span className="text-[7vh]">MY PROJECT</span>
              <span className="text-[4vh]">Here is some of my work that I've done in various programming languages</span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:mx-8">
              <div className="relative h-[35vh] sm:w-[45vh] sm:mx-80">
                  <img src="images\EC_Retail_ECommerce_750.jpg" className="w-full h-full object-cover" alt="Eccomerce" />
                  <div className="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                      <div className="text-[6vh]">Eccomerce</div>
                      <a href="https://suman31122000.github.io/eccomercesite/">Visit Me</a>
                  </div>
              </div>
              <div className="relative h-[35vh] sm:w-[45vh]">
                  <img src="images\blog2.jpg" className="w-full h-full object-cover" alt="Pathfinder" />
                  <div className="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                      <div className="text-[6vh]">Pathfinder</div>
                      <a href="https://suman31122000.github.io/pathfinder/">Visit Me</a>
                  </div>
              </div>
              <div className="relative h-[35vh] sm:w-[45vh] sm:mx-80">
                  <img src="images\port2.jpg" className="w-full h-full object-cover" alt="Todoapp" />
                  <div className="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                      <div className="text-[6vh]">Todoapp</div>
                      <a href="https://main--sage-cannoli-0c193c.netlify.app/">Visit Me</a>
                  </div>
              </div>
              <div className="relative h-[35vh] sm:w-[45vh]">
                  <img src="images\port3.jpg" className="w-full h-full object-cover" alt="Quizverse" />
                  <div className="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                      <div className="text-[6vh]">Quizverse</div>
                      <a href="https://quizzverse.netlify.app/">Visit Me</a>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Project;
