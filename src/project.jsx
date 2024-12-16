const Project = () => {
    const projects = [
      { imageUrl: "EC_Retail_ECommerce_750.jpg", link: "https://wcommerce.netlify.app/", title: "Eccomerce" },
      {imageUrl:"taskimage.avif", link:"https://taskmanagementsy.netlify.app/",title:"Task Management"},
      { imageUrl: "image50.webp", link: "https://bookstoreproject1.netlify.app/", title: "Bookstore" },
      { imageUrl: "image1.jpg", link: "https://evokegym.netlify.app", title: "Evogym" },
      { imageUrl: "blog2.jpg", link: "https://suman31122000.github.io/pathfinder/", title: "Pathfinder" },
      { imageUrl: "port3.jpg", link: "https://quizzverse.netlify.app/", title: "Quizverse" },
      { imageUrl: "port2.jpg", link: "https://main--sage-cannoli-0c193c.netlify.app/", title: "Todoapp" },
    ];
  
    return (
      <div id="projects" className="flex flex-col bg-slate-900">
        <div className="flex flex-col justify-center items-center text-white text-[4vh] my-10">
          <span className="text-[7vh]">MY PROJECT</span>
          <span className="text-[4vh]">Here is some of my work that I've done in various programming languages</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-12 ">
          {projects.map((project, index) => (
            <div key={index} className="relative sm:h-[35vh] sm:w-[55vh] col-span-4 sm:mx-20 ">
              <img src={project.imageUrl} className="w-full h-[35vh] sm:h-full object-cover" alt={project.title} />
              <div className="absolute inset-0 bg-slate-200 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
                <div className="text-[6vh]">{project.title}</div>
                <a href={project.link}>Visit Me</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Project;
  