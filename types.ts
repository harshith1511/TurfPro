
export interface Turf {
  id: string;
  name: string;
  location: string;
  pricePerHour: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  slots: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  turfId: string;
  date: string;
  slot: string;
  userName: string;
  userEmail: string;
  amount: number;
  status: 'pending' | 'confirmed';
}

export type ViewState = 'home' | 'booking' | 'about' | 'payment-success';
