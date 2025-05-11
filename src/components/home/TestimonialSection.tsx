import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const TestimonialSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="section-heading">What Our Customers Say</h2>
        <p className="section-subheading">Trusted by businesses and individuals across India</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                {testimonial.company && (
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;