
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              {t('home')}
            </Link>
            <Link to="/about" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              {t('about')}
            </Link>
            <Link to="/academics" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              {t('academics')}
            </Link>
            <Link to="/admissions" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              {t('admissions')}
            </Link>
            <Link to="/contact" className="text-school-blue hover:text-school-gold font-medium transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

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
            {t('home')}
          </Link>
          <Link 
            to="/about" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('about')}
          </Link>
          <Link 
            to="/academics" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('academics')}
          </Link>
          <Link 
            to="/admissions" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('admissions')}
          </Link>
          <Link 
            to="/contact" 
            className="py-3 border-b border-gray-100 text-school-blue hover:text-school-gold font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('contact')}
          </Link>
          <div className="py-3 flex justify-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
