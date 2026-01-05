
export interface PlantItem {
  id: string;
  name: string;
  category: 'wreath' | 'pot';
  price: number;
  location: string;
  imageUrl: string;
  status: 'available' | 'reserved' | 'sold';
  sellerName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
