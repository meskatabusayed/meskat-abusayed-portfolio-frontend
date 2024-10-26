import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="flex items-center space-x-2 mb-4">
          <FaEnvelope className="text-xl" />
          <span className="text-lg">meskatabusayed@gmail.com</span>
        </div>

        <div className="flex space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            <FaFacebook className="h-8 w-8 transform transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            <FaTwitter className="h-8 w-8 transform transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            <FaLinkedin className="h-8 w-8 transform transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            <FaGithub className="h-8 w-8 transform transition-transform duration-300 hover:scale-110" />
          </a>
        </div>

        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Meskat Mohammad Abu Sayed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
