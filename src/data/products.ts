import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Bond - Standard',
    shortDescription: 'Strong adhesive for general purpose use',
    description: 'Royal Bond Standard is a versatile adhesive perfect for everyday household and office use. It provides a strong, reliable bond on paper, cardboard, fabric, and other common materials.',
    imageUrl: 'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg',
    category: 'General',
    boxes: [
      {
        type: 'small',
        pieces: 25,
        weight: 20,
        price: '₹1,499'
      },
      {
        type: 'big',
        pieces: 50,
        weight: 50,
        price: '₹2,999'
      }
    ]
  },
  {
    id: '2',
    name: 'Royal Bond - Industrial',
    shortDescription: 'Heavy-duty adhesive for industrial applications',
    description: 'Royal Bond Industrial is a professional-grade adhesive designed for demanding applications. With enhanced bonding strength, it works effectively on metal, plastic, wood, and other industrial materials.',
    imageUrl: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg',
    category: 'Industrial',
    boxes: [
      {
        type: 'small',
        pieces: 25,
        weight: 20,
        price: '₹1,999'
      },
      {
        type: 'big',
        pieces: 50,
        weight: 50,
        price: '₹3,999'
      }
    ]
  }
  // Add other products with similar structure
];