import React from 'react';


function About() {
  return (
    <div id="about" className=" bg-gray-950 text-white pt-20 px-6 py-6 pb-20 flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Left Section - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
      <img 
  src="/Akshara.jpeg" 
  alt="Akshara" 
  className="rounded-[50%] w-80 h-80 object-cover shadow-lg border-4 border-violet-700"
/>

      </div>

      {/* Right Section - Text + ABOUT Label */}
      <div className="md:w-1/2 w-full flex flex-col justify-between h-full space-y-4 relative">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Hey, I’m <span className='text-purple-500'>
               Akshara </span>
                —
          </h1>
          <p className="text-lg text-gray-300">
          an Agricultural Engineer turned Programmer.
My roots are firmly grounded in agriculture, but my curiosity and passion for technology have led me into the world of programming. I enjoy exploring new tools, languages, and frameworks, and I thrive on solving problems through creative, efficient solutions.

I’m always eager to learn, adapt, and grow with emerging technologies. Whether it’s building interactive web applications, crafting intuitive designs, or diving into data-driven projects, I’m ready to take on challenges that align with my skills and passion.

I’m open to opportunities that allow me to combine my unique background and technical expertise to make a meaningful impact.
          </p>
        </div>

        {/* Bottom right-aligned ABOUT */}
        <div className="text-right mt-auto pt-10">
          <h2 className="text-xl text-gray-400 font-semibold">ABOUT</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
