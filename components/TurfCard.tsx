
import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Turf } from '../types';

interface TurfCardProps {
  turf: Turf;
  onSelect: (turf: Turf) => void;
}

export const TurfCard: React.FC<TurfCardProps> = ({ turf, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={turf.image} 
          alt={turf.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-xs font-bold text-gray-800">{turf.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
            New Venue
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{turf.name}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {turf.location}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {turf.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium uppercase tracking-tight">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500 block">Starting from</span>
            <span className="text-xl font-bold text-emerald-600">₹{turf.pricePerHour}<span className="text-sm font-normal text-gray-400">/hr</span></span>
          </div>
          <button 
            onClick={() => onSelect(turf)}
            className="flex items-center space-x-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-gray-200"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
