import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-400" size={60} /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={60} /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={60} /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" size={60} /> },
];

function Skills() {
  return (
    <div id="skills" className="bg-[#05070e] p-20 flex text-white relative">
      {/* Fixed Vertical Text on the Left */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 text-3xl font-bold tracking-widest">
        {'SKILLS'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="flex flex-1 justify-center items-center pl-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-36 h-36 border border-blue-500 rounded-lg flex flex-col items-center justify-center gap-2 transition-transform transform hover:scale-110 hover:shadow-lg duration-300"
            >
              {skill.icon}
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
