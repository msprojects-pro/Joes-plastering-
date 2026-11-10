export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'skimming' | 'rendering' | 'plasterboarding' | 'all';
  categoryLabel: string;
  description: string;
  image: string;
  location: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  service: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
