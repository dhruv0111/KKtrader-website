import { CartItem } from '../types';

export const generateWhatsAppLink = (items: CartItem[] | string): string => {
  const phoneNumber = '919999999999'; // Replace with your actual WhatsApp number
  
  if (typeof items === 'string') {
    // Handle string input for simple messages
    const message = encodeURIComponent(`Inquiry about ${items}`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
  
  // Handle cart items
  const orderDetails = items.map(item => 
    `${item.productName}\n` +
    `Box Type: ${item.boxType === 'small' ? 'Small (20g x 25pcs)' : 'Big (50g x 50pcs)'}\n` +
    `Quantity: ${item.quantity} boxes\n` +
    `Price: ${item.price}\n`
  ).join('\n');
  
  const message = encodeURIComponent(`New Order:\n\n${orderDetails}\n\nTotal Items: ${items.length}`);
  return `https://wa.me/${phoneNumber}?text=${message}`;
};