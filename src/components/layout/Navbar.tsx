import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Package } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">KK Traders</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <NavLink to="/" className={({isActive}) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Products
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/" 
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;