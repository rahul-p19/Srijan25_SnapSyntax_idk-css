import React from 'react'

function Projects({projects}) {
  return (
    <>
    <h2 className="text-3xl font-bold mb-6 text-center bg-black">PROJECTS</h2>
    <div className="relative bg-black text-white min-h-screen py-12 px-4">
    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-600 transform -translate-x-1/2"></div>

    <div className="flex flex-col gap-16 max-w-6xl mx-auto">
    {projects.map((project, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div key={index} className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}>
        <div className="relative w-full md:w-1/2">
        <div className={`absolute -top-6 ${isLeft ? 'right-4' : 'left-4'} bg-purple-400 text-white px-3 py-1 text-sm font-bold rounded`}>
        {project.title}
        </div>

        <div className="border border-purple-600 rounded-lg p-4 bg-black shadow-lg m-4">
        <img src={project.imgLink} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
        <div className="text-right">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
        Open
        </a>
        </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-600 border-2 border-white left-1/2 -translate-x-1/2 z-10"></div>
        </div>
        </div>
      );
    })}
    </div>
    </div>
    </>
  )
}

export default Projects
