import React from 'react';
import ProjectCard from './ProjectCard';
import sosProjectImage from './pic/image.png';

function Projects() {
  const projects = [
    {
      title: "SOS Game",
      description: "An interactive browser-based game built with HTML, CSS, and JavaScript. Allows players to compete in forming 'SOS' sequences with real-time score tracking.",
      link: "https://github.com/akshara25r/sos-game.git",
      src: sosProjectImage
    },
    {
      title: "What to Cook",
      description: "A recipe suggestion web app created using HTML, CSS, and JavaScript, integrated with a public API to fetch meal ideas based on selected ingredients.",
      link: "https://github.com/akshara25r/What-to-cook-today.git",
      src: sosProjectImage
    },
    {
      title: "Todo Application",
      description: "A responsive task management tool built with React, featuring CRUD operations, dynamic UI updates, and local storage support for persistent data.",
      link: "https://github.com/akshara25r/sos-game.git",
      src: sosProjectImage
    },{
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information, built with React and Tailwind CSS for a modern, responsive design.",
      link: "https://github.com/akshara25r/portfolio.git",
      src: sosProjectImage
    }
  ];

  return (
    <div id="projects" className="py-20 px-6 bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>

      <div className="flex space-x-6 overflow-x-auto no-scrollbar px-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            description={project.description}
            src={project.src}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
