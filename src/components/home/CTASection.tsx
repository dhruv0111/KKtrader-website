import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const CTASection: React.FC = () => {
  const whatsappLink = generateWhatsAppLink('Royal Bond Products');
  
  return (
    <section className="py-16 bg-blue-600">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order Royal Bond Products?
          </h2>
          <p className="text-blue-100 text-lg mb-8 mx-auto">
            Get in touch with us today for fast delivery of premium adhesive solutions. We're ready to serve your needs!
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>Order via WhatsApp</span>
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="flex items-center space-x-2 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;