import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-700 text-white py-20 flex flex-col items-center justify-center min-h-screen">
      {/* Animated Text */}
      <h1 className="text-5xl md:text-6xl font-bold text-center animate-fade-in-down">
        Hello, I’m <span className="text-indigo-300">Meskat Mohammad Abu Sayed</span>
      </h1>
      <p className="text-lg md:text-xl mt-4 text-center text-gray-200 animate-fade-in-up">
        A Passionate <span className="text-indigo-300">Web Developer</span> & <span className="text-pink-300">Designer</span>
      </p>

      {/* Resume Download Button */}
      <NavLink
        to="https://docs.google.com/document/d/1vGdR3cbMztr1rOsj_V4x4v0rL8mEhw8rP1KZf7DsPJQ/edit?usp=drive_link"
        target="_blank"  // Open in a new tab
        download="YourName_Resume.pdf"  // This enables download functionality
        className="mt-8 px-8 py-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-400 rounded-full transition transform hover:-translate-y-1 duration-300 animate-fade-in-up shadow-lg"
      >
        Download Resume
      </NavLink>
    </section>
  );
};

export default Banner;
