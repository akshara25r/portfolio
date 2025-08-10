import React from 'react';

function ProjectCard({ name, description, src, link }) {
  return (
    <div className="bg-gray-800 text-white rounded-2xl p-6 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
      <h3 className="text-lg font-semibold text-amber-400 mb-2">{name}</h3>
      
      {/* Project Image */}
      <img 
        src={src} 
        alt={name} 
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />

      <p className="text-sm text-gray-200 break-words">{description}</p>

      {/* View Project Link */}
      <div className="flex justify-end mt-4">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cyan-400 hover:underline cursor-pointer text-sm font-medium"
        >
          View project →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
