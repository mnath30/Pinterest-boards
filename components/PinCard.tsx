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
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={pin.imageUrl}
          alt={pin.title}
          className="w-full h-auto object-cover"
          style={{ aspectRatio: `1 / ${pin.heightRatio}` }}
          loading="lazy"
        />
        {/* Hover Overlay - Desktop style mostly, but good for touch feedback */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      
      {!isStacked && (
        <div className="mt-2 flex justify-between items-start px-1">
          <p className="text-[13px] font-medium text-gray-900 truncate pr-2">{pin.title}</p>
          <button className="text-gray-500 hover:text-gray-900">
            <MoreHorizontal size={14} />
          </button>
        </div>
      )}
    </div>
  );
};
