
import React from 'react';
import { Layout, Search, User, Menu } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: any) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer space-x-2" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Turf<span className="text-emerald-600">Pro</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium ${currentView === 'home' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600 transition-colors'}`}
            >
              Discover
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium ${currentView === 'about' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600 transition-colors'}`}
            >
              About Us
            </button>
            <button className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Support
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-emerald-600">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            <button className="md:hidden p-2 text-gray-400">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
