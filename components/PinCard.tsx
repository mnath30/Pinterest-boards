import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Pin } from '../types';

interface PinCardProps {
  pin: Pin;
  isStacked?: boolean;
}

export const PinCard: React.FC<PinCardProps> = ({ pin, isStacked = false }) => {
  return (
    <div className={`relative group mb-4 break-inside-avoid ${isStacked ? 'opacity-90 scale-95 origin-top' : ''}`}>
      <div className="relative overflow-hidden rounded-[1.5rem] bg-gray-100 cursor-zoom-in">
        <img
          src={pin.imageUrl}
          alt={pin.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: `1 / ${pin.heightRatio}` }}
          loading="lazy"
        />
        {/* Save Button (Pinterest Signature) */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-[#E60023] text-white px-4 py-2 rounded-full font-bold text-sm shadow-md active:scale-95 transition-transform">
            Save
          </button>
        </div>
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      
      {!isStacked && (
        <div className="mt-2 flex justify-between items-center px-1">
          <p className="text-[12px] font-semibold text-gray-900 truncate pr-2">{pin.title}</p>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal size={14} />
          </button>
        </div>
      )}
    </div>
  );
};