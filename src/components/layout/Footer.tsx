import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">KK Traders</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fast & Strong Adhesive Solutions - Delivered to Your Doorstep
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Royal Bond - Standard</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Royal Bond - Industrial</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Royal Bond - Quick Set</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">View All Products</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">+91 99999 99999</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">info@kktraders.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Business Park, Industrial Area, City, State, 123456</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} KK Traders. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;