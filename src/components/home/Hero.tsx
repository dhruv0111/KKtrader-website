import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const Hero: React.FC = () => {
  const whatsappLink = generateWhatsAppLink('Royal Bond');
  
  return (
    <div className="relative min-h-screen flex items-center bg-gray-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50"></div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Fast & Strong <span className="text-blue-600">Adhesive Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Royal Bond provides industry-leading adhesive products delivered right to your doorstep. Perfect for industrial, construction, and household applications.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="flex items-center space-x-2">
                  <MessageCircle size={20} />
                  <span>Order Now</span>
                </Button>
              </a>
              <Link to="/products">
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <span>View Products</span>
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative slide-in">
              <div className="absolute -inset-4 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg" 
                alt="Royal Bond Adhesive" 
                className="relative z-10 rounded-lg shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;