import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';
import Button from '../ui/Button';

const FeaturedProducts: React.FC = () => {
  // Get the first 3 products to feature
  const featuredProducts = products.slice(0, 3);
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Featured Products</h2>
        <p className="section-subheading">Discover our most popular adhesive solutions</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" className="inline-flex items-center space-x-2">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;