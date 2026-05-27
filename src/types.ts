export type ActivePage = 'home' | 'services' | 'gallery' | 'about' | 'contact';

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  location: string;
  guestCount: string;
  comments: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface EventPackage {
  id: string;
  name: string;
  subtitle: string;
  screenSize: string;
  capacity: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}
