import React from 'react';
import { Truck, ShieldCheck, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: 'Premium Quality',
    description: 'Our adhesives offer exceptional bonding strength and durability for all your needs.'
  },
  {
    icon: <Truck className="h-8 w-8 text-blue-600" />,
    title: 'Fast Delivery',
    description: 'We deliver our products directly to your doorstep with quick turnaround times.'
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Strong Bond',
    description: 'Royal Bond provides industrial-strength adhesion for demanding applications.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Quick Setting',
    description: 'Our special formulations provide rapid setting times to speed up your projects.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Why Choose Royal Bond?</h2>
        <p className="section-subheading">Experience the difference with our high-performance adhesive solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;