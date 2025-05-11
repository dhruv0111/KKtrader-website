import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-sm text-white font-medium px-2 py-1 bg-blue-600 rounded-full inline-block">
            {product.category}
          </p>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-bold mb-1 text-gray-900 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3">{product.shortDescription}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">From {product.boxes[0].price}</span>
          <Link to={`/products/${product.id}`}>
            <button className="btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;