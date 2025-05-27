import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            PetCool<span className="text-cyan-400">Mats</span>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-200'}`}>Features</a>
          <a href="#benefits" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-200'}`}>Benefits</a>
          <a href="#testimonials" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-200'}`}>Reviews</a>
          <a href="#faq" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-200'}`}>FAQ</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className={`p-2 rounded-full transition-colors ${
            isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'
          }`}>
            <ShoppingCart size={20} />
          </button>
          
          <button 
            className={`p-2 rounded-full md:hidden transition-colors ${
              isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <nav className="flex flex-col space-y-4 p-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;