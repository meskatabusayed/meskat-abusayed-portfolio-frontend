import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaFolderOpen, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <FaUser className="text-indigo-500" />
          <span>My Portfolio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
            <FaUser />
            <span>Home</span>
          </a>
          <a href="#projects" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
            <FaFolderOpen />
            <span>Projects</span>
          </a>
          <a href="#skills" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
            <FaCode />
            <span>Skills</span>
          </a>
          <a href="#contact" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-5 px-6 space-y-4 animate-slide-in">
          <a href="#home" className="block text-gray-300 flex items-center space-x-2 hover:text-indigo-500 transition duration-300">
            <FaUser />
            <span>Home</span>
          </a>
          <a href="#projects" className="block text-gray-300 flex items-center space-x-2 hover:text-indigo-500 transition duration-300">
            <FaFolderOpen />
            <span>Projects</span>
          </a>
          <a href="#skills" className="block text-gray-300 flex items-center space-x-2 hover:text-indigo-500 transition duration-300">
            <FaCode />
            <span>Skills</span>
          </a>
          <a href="#contact" className="block text-gray-300 flex items-center space-x-2 hover:text-indigo-500 transition duration-300">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
