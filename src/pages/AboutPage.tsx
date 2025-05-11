import React from 'react';
import { ShieldCheck, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About KK Traders</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            The story behind our premium adhesive solutions and our commitment to quality
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, KK Traders began as a small family business with a vision to provide high-quality adhesive solutions to industries across India. What started as a modest operation has now grown into a trusted supplier of premium bonding products.
              </p>
              <p className="text-gray-600 mb-4">
                Our flagship product, Royal Bond, was developed after years of research to create an adhesive that combines strength, reliability, and versatility. Today, our range has expanded to meet the diverse needs of our customers, from household repairs to industrial applications.
              </p>
              <p className="text-gray-600">
                We take pride in our commitment to quality and customer satisfaction, ensuring that every bottle of adhesive that leaves our facility meets the highest standards of performance.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3862616/pexels-photo-3862616.jpeg" 
                alt="KK Traders Workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At KK Traders, we're driven by our commitment to excellence and customer satisfaction. These core values guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
                title: 'Quality',
                description: 'We never compromise on the quality of our products, using only the finest materials and rigorous testing procedures.'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen to your needs and continuously improve our products and services.'
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: 'Excellence',
                description: 'We strive for excellence in all aspects of our business, from product formulation to customer service and delivery.'
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
                title: 'Innovation',
                description: 'We invest in research and development to create innovative solutions that meet the evolving needs of our customers.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team/Leadership */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                position: 'Founder & CEO',
                bio: 'With over 20 years of experience in the adhesives industry, Rajesh founded KK Traders with a vision to provide quality products at competitive prices.',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
              },
              {
                name: 'Amit Sharma',
                position: 'Operations Manager',
                bio: 'Amit oversees all aspects of our manufacturing and supply chain, ensuring efficient production and timely delivery of our products.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              {
                name: 'Priya Patel',
                position: 'Sales Director',
                bio: 'Priya leads our sales team, building strong relationships with customers and expanding our reach across different markets.',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;