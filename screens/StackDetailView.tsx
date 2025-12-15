import React, { useState } from 'react';
import { X, Heart, ChevronDown } from 'lucide-react';
import { PinStackData } from '../types';

interface StackDetailViewProps {
  stack: PinStackData | null;
  onClose: () => void;
}

export const StackDetailView: React.FC<StackDetailViewProps> = ({ stack, onClose }) => {
  const [likedPins, setLikedPins] = useState<Set<string>>(new Set());
  const [removedPins, setRemovedPins] = useState<Set<string>>(new Set());

  if (!stack) return null;

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLiked = new Set(likedPins);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPins(newLiked);
  };

  const removePin = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newRemoved = new Set(removedPins);
    newRemoved.add(id);
    setRemovedPins(newRemoved);
  };

  const visiblePins = stack.pins.filter(p => !removedPins.has(p.id));

  return (
    <div className="fixed inset-0 z-50 bg-white animate-in slide-in-from-bottom-10 duration-300 flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onClose}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronDown size={28} className="text-gray-900" />
        </button>
        <div className="text-center">
            <h2 className="text-lg font-bold text-gray-900">{stack.title}</h2>
            <p className="text-xs text-gray-500">{visiblePins.length} ideas</p>
        </div>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="columns-2 gap-4">
          {visiblePins.map((pin) => (
            <div key={pin.id} className="relative mb-4 break-inside-avoid group">
              <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={pin.imageUrl} 
                  alt={pin.title} 
                  className="w-full h-auto object-cover"
                />
                
                {/* Actions Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    <button 
                      onClick={(e) => removePin(pin.id, e)}
                      className="bg-white/90 p-2 rounded-full hover:bg-white text-gray-900 shadow-sm transition-transform active:scale-90"
                    >
                        <X size={18} />
                    </button>
                    <button 
                      onClick={(e) => toggleLike(pin.id, e)}
                      className={`p-2 rounded-full shadow-sm transition-transform active:scale-90 ${likedPins.has(pin.id) ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-900 hover:bg-white'}`}
                    >
                        <Heart size={18} className={likedPins.has(pin.id) ? "fill-current" : ""} />
                    </button>
                </div>
              </div>
              <p className="mt-2 text-xs font-medium text-gray-900 px-1 truncate">{pin.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
