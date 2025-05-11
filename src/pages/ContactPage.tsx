import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { generateWhatsAppLink } from '../utils/whatsapp';
import GoogleMap from '../components/map/GoogleMap';

const ContactPage: React.FC = () => {
  const whatsappLink = generateWhatsAppLink('General Inquiry');
  const address = 'Times Square, Manhattan, New York, NY 10036, USA';
  const googleMapsApiKey = "AIzaSyC-2OjF_W0oyC6ZRC5P6YMAm9ct4R8VP8s";
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with our team for inquiries, orders, or support
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+91 99999 99999</p>
              <p className="text-gray-600">+91 88888 88888</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Mail className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@kktraders.com</p>
              <p className="text-gray-600">sales@kktraders.com</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
              <p className="text-gray-600">Saturday: 10AM - 4PM</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">KK Traders</h3>
                  <p className="text-gray-600">
                    Times Square<br />
                    Manhattan, New York, NY 10036<br />
                    USA
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products? Need a custom order? Reach out to us directly through WhatsApp for the fastest response.
              </p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="flex items-center space-x-2">
                  <MessageCircle size={20} />
                  <span>Contact via WhatsApp</span>
                </Button>
              </a>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-96">
              <GoogleMap address={address} apiKey={googleMapsApiKey} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+91 98765 43210"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your inquiry or requirements..."
              ></textarea>
            </div>
            
            <Button type="submit" variant="primary" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;