import React, { useState } from 'react';
import axios from 'axios';
import { FaGithub, FaLinkedin,FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://portfolio-4zqz.onrender.com/send", form);
      alert("Message sent successfully!");
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-950 px-6 py-12 md:py-20" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl text-gray-400 font-semibold mb-6 rotate-[-90deg] md:rotate-0 text-center md:text-left md:mb-4">
              Let’s Connect!
            </h2>
            <form onSubmit={handleSubmit} className="p-6 rounded-xl shadow-md space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border bg-gray-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border bg-gray-950 border-gray-300 rounded-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border bg-gray-950 border-gray-300 rounded-md h-32 resize-none"
              ></textarea>
              <button 
  type="submit" 
  className="bg-gradient-to-r from-violet-500 via-pink-500 to-indigo-500 
             text-white px-6 py-2 rounded-full 
             hover:from-pink-600 hover:via-violet-400 hover:to-purple-500
             transition-all duration-300"
>
  Send Message
</button>

            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full md:w-1/2 md:text-left pt-10 pl-40">
           <p className="text-lg mb-2 text-gray-400 flex items-center gap-2">
    <FaPhoneAlt className="text-pink-800" /> +91 8301 8180 75
  </p>
  <p className="text-lg mb-2 text-gray-400 flex items-center gap-2">
    <FaEnvelope className="text-pink-800" /> aksharar02@example.com
  </p>
  <p className="text-lg mb-6 text-gray-400 flex items-center gap-2">
    <FaMapMarkerAlt className="text-pink-800" />
    Olavilayil (H), Pullikkanam,
    <br />
    Vagamon, Idukki 685503
    <br />
    Kerala
  </p>
            <div className="flex justify-center md:justify-start gap-4 pt-10 pr-20">
                     
                      <a 
                  href="https://leetcode.com/u/AkshuAkku/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className= "hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-800 rounded-md bg-gradient-to-r from-teal-800  to-blue-500 text-gray-300 hover:text-yellow-400 transition text-2xl ml-2 p-2"
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
