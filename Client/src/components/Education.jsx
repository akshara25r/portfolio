import React from 'react';

const educationData = [
  {
    degree: "BE Agriculture Engineering",
    institution: "Sri Shakthi Institute of Engineering and technology, Coimbatore",
    duration: "2020 - 2024",
  description: "Specialized in integrating engineering principles with sustainable farming practices. Developed skills in irrigation systems, crop processing, and emerging agri-tech solutions."
},
  {
    degree: "Higher Secondary Education",
    institution: "Gov.Higher Secondary School, Vagamon",
    duration: "2018 - 2020",
   description: "Focused on core sciences including Physics, Chemistry, Mathematics, and Biology. Built a strong academic foundation that nurtured analytical thinking and problem-solving skills."
  }
];

function Education() {
  return (
    <div className="bg-gray-950 text-white py-12 px-6 md:px-16" id="education">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-sm text-gray-400 italic mb-2">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
            <p className="text-sm leading-relaxed text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
