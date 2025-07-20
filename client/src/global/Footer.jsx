import React from 'react';

const Footer = ({ bgClass = 'bg-white', textClass = 'text-gray-600', border = true }) => {
  return (
    <footer className={`${bgClass} ${border ? 'border-t border-gray-200' : ''} py-8 px-4 mx-auto max-w-screen-xl`}>
      <div className="text-center">
        <p className={textClass}>
          Made with ❤️ for GirlScript Summer of Code • Open Source Project
        </p>
      </div>
    </footer>
  );
};

export default Footer;
