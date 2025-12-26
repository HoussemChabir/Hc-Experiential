
import React from 'react';
import { COLORS } from '../constants';
import { AppState } from '../types';

interface NavbarProps {
  currentTab: AppState;
  setTab: (tab: AppState) => void;
  onBookClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, setTab, onBookClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => setTab('home')}
          className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
          style={{ color: COLORS.TEXT }}
        >
          SENSE TUNISIA
        </button>
        
        <div className="hidden md:flex items-center space-x-12">
          {[
            { id: 'experiences', label: 'EXPERIENCES' },
            { id: 'stories', label: 'STORIES' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => setTab(link.id as AppState)}
              className={`text-[11px] tracking-[0.2em] font-medium transition-colors hover:text-[#CCBEB1] ${
                currentTab === link.id ? 'text-[#CCBEB1]' : 'text-[#666666]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          onClick={onBookClick}
          className="text-[11px] tracking-[0.2em] font-medium px-6 py-2 border border-gray-200 hover:border-[#CCBEB1] transition-colors"
          style={{ color: COLORS.TEXT }}
        >
          BOOK
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
