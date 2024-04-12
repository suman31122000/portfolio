const Skills = () => {
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 60 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'Node.js', percentage: 70 },
        { name: 'Express.js', percentage: 80 },
        { name: 'C++', percentage: 95 }
    ];
  
    return (
        <div id="skills" className="bg-gray-900 text-white flex flex-col ">
            <div className='grid sm:grid-cols-2'>
                <div className='flex flex-col items-center'>
                    <p className="my-16 text-4xl">ABOUT ME</p>
                    <span className=" text-xl italic mx-10 border-4 p-10 border-y-green-600">Hello and welcome! I'm Suman Bando, a passionate software developer dedicated to crafting innovative solutions that make a meaningful impact. Through this portfolio, I invite you to explore my journey,
                       projects, and expertise in the realm of software development.</span>
                </div>
  
                <div className="flex flex-col gap-2 my-8">
                  <span className="flex justify-center text-6xl"></span>
                  <span className=" text-4xl my-5 mx-44">SKILLS </span>
                    <div className="w-96"> 
                        {skills.map((skill, index) => (
                            <div key={index} className="container">
                                <div className="skillshtml">
                                    <span className={`${skill.name.toLowerCase()}`}>{skill.name}</span>
                                    <div className="relative h-8 w-96 sm:w-[80vh] bg-slate-700">
                                        <div
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span>{skill.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Skills;