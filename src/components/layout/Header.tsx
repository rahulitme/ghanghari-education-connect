
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-school-blue to-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-school-blue font-bold text-xl">Mansarovar</h1>
              <p className="text-xs text-gray-600 italic">Public School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              About
            </Link>
            <Link to="/academics" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              Academics
            </Link>
            <Link to="/admissions" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              Admissions
            </Link>
            <Link to="/contact" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-school-blue focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <nav className="flex flex-col px-4 py-2">
          <Link 
            to="/" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/academics" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Academics
          </Link>
          <Link 
            to="/admissions" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link 
            to="/contact" 
            className="py-3 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
