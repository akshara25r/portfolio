import React from 'react';

function ExperienceCard({ role, company, description }) {
  return (
      <div className="bg-gray-800 text-white rounded-2xl p-6 w-80 flex-shrink-0 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
      <h3 className="text-xl font-semibold mb-1">{role}</h3>
      <p className="text-sm text-gray-400 mb-3 italic">{company}</p>
      <p className="text-sm text-gray-200 break-words">{description}</p>
    </div>
  
  );
}

export default ExperienceCard;
