import React from 'react'
import Project from './Project';

const ProjectsCarousel = ({projects}) => {
  return (
    <div className="flex md:grid grid-cols-2 xl:grid-cols-3 items-center overflow-x-auto space-x-4 no-scrollbar snap-x snap-mandatory">
      {projects.map((project, index) => (
        <div className="" key={index}>
          <Project {...project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectsCarousel