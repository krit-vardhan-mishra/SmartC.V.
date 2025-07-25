import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide mb-2 md:mb-0">SmartC.V</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Upload Resume</a>
        <a href="#" className="hover:underline">Resume Builder</a>
        <a href="#" className="hover:underline">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
