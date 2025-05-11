import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import ProductDetail from '../components/product/ProductDetail';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Product Detail Header */}
      <div className="bg-gray-100 py-8">
        <div className="container-custom">
          <Link to="/products" className="text-blue-600 hover:underline flex items-center mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
      
      {/* Product Content */}
      <div className="container-custom py-8">
        <ProductDetail product={product} />
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-900 font-bold mt-1">{relatedProduct.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;