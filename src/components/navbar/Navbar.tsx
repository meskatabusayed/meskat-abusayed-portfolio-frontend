import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";

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
          <Link to="/" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
            <FaUser />
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
          <MdDashboard />
            <span>Dashboard</span>
          </Link>
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FaTimes className="h-6 w-6 text-white" /> : <FaBars className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-5 px-6 space-y-4 animate-slide-in">
          <Link to="/" className="block text-gray-300 flex items-center space-x-2 hover:text-indigo-500 transition duration-300">
            <FaUser />
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-500 transition duration-300">
          <MdDashboard />
            <span>Dashboard</span>
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
