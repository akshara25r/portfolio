import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      description: 'Built responsive UI components using React and Tailwind CSS.',
    },
    {
      role: 'Campus Ambassador',
      company: 'Coding Ninjas',
      description: 'Promoted events and helped students register for tech bootcamps.',
    },
    {
      role: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      description: 'Contributed to beginner-friendly repositories and improved documentation.',
    },
    {
      role: 'Teaching Assistant',
      company: 'Kalvium',
      description: 'Mentored first-year students in frontend development and problem-solving.',
    },
    {
      role: 'Teaching Assistant',
      company: 'Kalvium',
      description: 'Mentored first-year students in frontend development and problem-solving.',
    },
    {
      role: 'Teaching Assistant',
      company: 'Kalvium',
      description: 'Mentored first-year students in frontend development and problem-solving.',
    },
    {
      role: 'Teaching Assistant',
      company: 'Kalvium',
      description: 'Mentored first-year students in frontend development and problem-solving.',
    },
  ];

  return (
    <div id="experience" className="py-20 px-6 pb-3 bg-gray-950 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Experience</h2>


      <div className="flex space-x-6 overflow-x-auto no-scrollbar px-2">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
