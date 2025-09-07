import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 text-xl font-semibold">SmartCV</div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/upload" className="hover:bg-gray-700 px-3 py-2 rounded">Upload Resume</Link>
            <Link to="/builder" className="hover:bg-gray-700 px-3 py-2 rounded">Resume Builder</Link>
            <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</Link>
          </div>
        </div>
        <div className="md:hidden">
          {/* mobile menu button */}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
