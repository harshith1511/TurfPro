
import { Turf } from './types';

export const MOCK_TURFS: Turf[] = [
  {
    id: '1',
    name: 'Green Field Arena',
    location: 'Downtown Sports Complex',
    pricePerHour: 1200,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800&auto=format&fit=crop',
    description: 'Premier floodlit arena with ICC standard synthetic turf, perfect for T20 night matches.',
    amenities: ['Floodlights', 'Changing Rooms', 'Drinking Water', 'Parking'],
    slots: [
      { time: '06:00 AM - 07:00 AM', isAvailable: true },
      { time: '07:00 AM - 08:00 AM', isAvailable: false },
      { time: '06:00 PM - 07:00 PM', isAvailable: true },
      { time: '07:00 PM - 08:00 PM', isAvailable: true },
      { time: '08:00 PM - 09:00 PM', isAvailable: false },
      { time: '09:00 PM - 10:00 PM', isAvailable: true },
    ]
  },
  {
    id: '2',
    name: 'The Pavilion Turf',
    location: 'North Suburbs, Sector 12',
    pricePerHour: 800,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop',
    description: 'High-bounce matting ideal for fast bowling practice and intensive drills.',
    amenities: ['Bowling Machine', 'Coaching Staff', 'Dugout', 'Cafeteria'],
    slots: [
      { time: '08:00 AM - 09:00 AM', isAvailable: true },
      { time: '10:00 AM - 11:00 AM', isAvailable: true },
      { time: '04:00 PM - 05:00 PM', isAvailable: true },
      { time: '05:00 PM - 06:00 PM', isAvailable: false },
    ]
  },
  {
    id: '3',
    name: 'Eden Sports Hub',
    location: 'Riverside Walk',
    pricePerHour: 1500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop',
    description: 'Luxury turf with high-speed Wi-Fi and premium spectator seating. Perfect for corporate tournaments.',
    amenities: ['VIP Lounge', 'HD Live Streaming', 'Showers', 'Equipment Rental'],
    slots: [
      { time: '09:00 AM - 10:00 AM', isAvailable: true },
      { time: '07:00 PM - 08:00 PM', isAvailable: true },
      { time: '08:00 PM - 09:00 PM', isAvailable: true },
    ]
  }
];
