import React from 'react';
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
function Home() {
  return (
    <div  id="home" className="min-h-screen bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 pb-0 gap-12">
      
      <div className="md:w-1/2 space-y-4 pl-10">
        <h1 className="text-5xl font-bold leading-snug">
          Hey, I’m Akshara —
        </h1>
        <p className="text-2xl text-gray-300">
          A creative mind you’ll want to meet, with <span className="text-yellow-400">ideas worth knowing</span>, 
          <span className="text-teal-400"> projects that speak</span>, and always open to <span className="text-pink-400"> <a href="#contact">connect</a></span>.
        </p>
          <div className="flex justify-center md:justify-start gap-4 pt-10 pl-20 pr-20">
           
            <a 
        href="https://leetcode.com/u/AkshuAkku/" 
        target="_blank" 
        rel="noopener noreferrer"
        className= "hover:bg-gradient-to-r hover:from-teal-500  hover:to-emerald-800 rounded-md bg-gradient-to-r from-teal-800  to-blue-500 text-gray-300 hover:text-yellow-400 transition text-2xl ml-10 p-2"
      >
        <SiLeetcode />
      </a>

       <a 
        href="https://github.com/akshara25r" 
        target="_blank" 
        rel="noopener noreferrer"
        className= "hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-800 rounded-md bg-gradient-to-r from-teal-800  to-blue-500 text-gray-300 hover:text-yellow-400 transition text-2xl p-2"
     >
        <FaGithub />
      </a>

      <a 
        href="http://www.linkedin.com/in/akshara-r-9a734924b" 
        target="_blank" 
        rel="noopener noreferrer"
          className= "hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-800 rounded-md bg-gradient-to-r from-teal-800  to-blue-500 text-gray-300 hover:text-yellow-400 transition text-2xl p-2"
     >
        <FaLinkedin />
      </a>

         <a 
        href="mailto:aksharar02@example.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className= "hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-800 rounded-md bg-gradient-to-r from-teal-800  to-blue-500 text-gray-300 hover:text-yellow-400 transition text-2xl p-2"
     >
        <MdEmail />
      </a>
            </div>
         <div className="flex gap-4 pt-8 pl-20">
  <button className="px-6 py-2 bg-gradient-to-r from-violet-500  via-pink-500 to-indigo-500 text-white rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg">
   <a href="#contact">Let's Connect</a> 
  </button>
<button className="flex items-center gap-2 px-6 py-2 border border-teal-400 text-teal-400 rounded-full font-semibold transition duration-300 hover:bg-teal-400 hover:text-gray-950 shadow-md">
  <a
    href="/Akshara_Resume.pdf" 
    download="Akshara_Resume.pdf" 
    className="flex items-center gap-2"
  >
    Get Resume
    <HiDownload size={20} />
  </a>
</button>
</div>

      </div>

      <div className="md:w-1/2 w-full bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
        <br />
       <div className="flex p-2 gap-2">
  <div className="bg-red-500 w-3 h-3 rounded-full border border-red-800"></div>
  <div className="bg-yellow-400 w-3 h-3 rounded-full border border-yellow-700"></div>
  <div className="bg-green-500 w-3 h-3 rounded-full border border-green-800"></div>
</div>

        <br /><hr className="text-purple-900" /><br />
        <pre className="text-sm md:text-base font-mono leading-relaxed text-white whitespace-pre-wrap">
          <span className="text-pink-400">function</span>  
{` Programmer ()`}
  <span className="text-violet-600">
  {` { `}
  </span>
<br />
  <span className="text-green-400 pl-5"> const </span>
  akshara = 
  <span className="text-violet-600">
  {` { `}
  </span>
  <br/>
    name:
   <span className="text-yellow-400">
 'Akshara R '
   </span>,
   <br /> 
    background: 
   <span className="text-yellow-400">

    'Agri Engineer turned Coder '
    </span>,
    <br />

    skills:
   <span className="text-yellow-400">
     ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Java',
     'Git', 'Figma']
     </span>,
     <br />
    loves: 
   <span className="text-yellow-400">
    ['Caffeine', 'Music', 'Crafts', 'Sleep', 'Coding']
     </span>,
     <br />
    <span className="text-violet-400">quick_Learner : </span>
    <span className="text-yellow-400">true</span>,
    <br />
    <span className="text-violet-400">problem_Solver : </span>
    <span className="text-yellow-400">true</span>,
     <br />

    quote: 
   <span className="text-teal-500">
    "All dreams can come true if we have the courage to pursue them."
     </span>,
     <br />
       <span className="text-violet-600">

  {` }`}
  </span>;
 {`


  return `}
 <span className="text-pink-700">akshara</span>;
 <br />
  <span className="text-violet-600">
  {` }`}
  </span>
  <br />
  <span className="text-yellow-400">
console.log<span className='text-pink-600'>(</span>
<span className='text-emerald-600'>
  Programmer
  </span>
  ()<span className='text-pink-600'>)</span>
  </span>;
        </pre>
      </div>
    </div>
  );
}

export default Home;
