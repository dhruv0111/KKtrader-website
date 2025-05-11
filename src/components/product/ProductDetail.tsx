import React, { useState } from 'react';
import { MessageCircle, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product, BoxSize, CartItem } from '../../types';
import Button from '../ui/Button';
import { generateWhatsAppLink } from '../../utils/whatsapp';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedBox, setSelectedBox] = useState<BoxSize>(product.boxes[0]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const addToCart = () => {
    const newItem: CartItem = {
      productId: product.id,
      productName: product.name,
      boxType: selectedBox.type,
      quantity,
      price: selectedBox.price
    };
    
    setCart([...cart, newItem]);
    setQuantity(1);
  };
  
  const whatsappLink = generateWhatsAppLink(cart);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-96 w-full object-cover md:h-full"
          />
        </div>
        
        <div className="p-6 md:w-1/2">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Box Size</h3>
            <div className="flex gap-4">
              {product.boxes.map((box) => (
                <button
                  key={box.type}
                  onClick={() => setSelectedBox(box)}
                  className={`p-4 border rounded-lg flex-1 ${
                    selectedBox.type === box.type 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200'
                  }`}
                >
                  <p className="font-semibold">{box.type === 'small' ? 'Small Box' : 'Big Box'}</p>
                  <p className="text-sm text-gray-600">{box.pieces} pieces</p>
                  <p className="text-sm text-gray-600">{box.weight}g each</p>
                  <p className="font-bold mt-2">{box.price}</p>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={decreaseQuantity}
                className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 p-2 text-center border-t border-b border-gray-300 focus:outline-none"
              />
              <button 
                onClick={increaseQuantity}
                className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="primary" 
              onClick={addToCart}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Button>
            
            {cart.length > 0 && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="whatsapp" fullWidth className="flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Order ({cart.length})
                </Button>
              </a>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
              <div className="space-y-2">
                {cart.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-sm text-gray-600">
                      {item.boxType === 'small' ? 'Small Box (20g x 25pcs)' : 'Big Box (50g x 50pcs)'}
                    </p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;