export interface BoxSize {
  type: 'small' | 'big';
  pieces: number;
  weight: number;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  boxes: BoxSize[];
}

export interface CartItem {
  productId: string;
  productName: string;
  boxType: 'small' | 'big';
  quantity: number;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  content: string;
  rating: number;
}