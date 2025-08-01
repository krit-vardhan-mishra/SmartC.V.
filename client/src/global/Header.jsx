import { Github, Menu, X, FileText, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[80%] bg-gradient-to-r from-blue-600 to-purple-600 md:rounded-full shadow-lg border border-[#00FFE6]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 text-white rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Smart C.V.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#00FFE6] transition-colors font-medium hover:scale-105 transform duration-200">
              Home
            </Link>
            <a href="/features" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFE6] transition-colors font-medium hover:scale-105 transform duration-200">
              Features
            </a>
            <a href="/how-it-works" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFE6] transition-colors font-medium hover:scale-105 transform duration-200">
              How it Works
            </a>
            <a href="/docs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFE6] transition-colors font-medium hover:scale-105 transform duration-200">
              Docs
            </a>
            <a href="/skill-match" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFE6] transition-colors font-medium hover:scale-105 transform duration-200">
              ATS Checker
            </a>
            <a href="https://github.com/AbhinavDhiman34/SmartC.V." target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00FFE6] transition-colors font-medium flex items-center space-x-1 hover:scale-105 transform duration-200">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/login" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-white hover:text-gray-900 font-medium transition-colors">
              Login
            </a>
            <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg transform hover:scale-105">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#00FFE6] bg-gradient-to-br from-blue-700 to-purple-700 text-white">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/" className="block px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <a href="/features" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="/how-it-works" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                How it Works
              </a>
              <a href="/docs" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Documentation
              </a>
              <a href="/skill-match" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                ATS Checker
              </a>
              <a href="https://github.com/AbhinavDhiman34/SmartC.V." target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 text-white hover:text-[#00FFE6] hover:bg-gray-50 rounded-lg transition-colors font-medium space-x-2" onClick={() => setIsMenuOpen(false)}>
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="border-t border-gray-200 pt-4 pb-2">
                <a href="/login" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-white hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  Login
                </a>
                <a href="/dashboard" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-center" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
