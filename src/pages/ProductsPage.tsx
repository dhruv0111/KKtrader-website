import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ProductsPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const filteredProducts = categoryFilter 
    ? products.filter(product => product.category === categoryFilter) 
    : products;
    
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="bg-gray-800 text-white py-20 mb-10">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Discover our range of premium adhesive solutions designed for various applications
          </p>
        </div>
      </div>
      
      <div className="container-custom">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setCategoryFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoryFilter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All Products
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">
              Try changing your filter or check back later for new products.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;