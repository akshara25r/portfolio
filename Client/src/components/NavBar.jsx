import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-900 w-full text-white px-6 py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          Akshara
        </div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-400 cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 cursor-pointer">About</a></li>
          <li><a href="#experience" className="hover:text-yellow-400 cursor-pointer">Experience</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 cursor-pointer">Skills</a></li>
          <li><a href="#education" className="hover:text-yellow-400 cursor-pointer">Education</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 cursor-pointer">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar;
