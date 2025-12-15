import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BoardProgressCardProps {
  onClick: () => void;
}

export const BoardProgressCard: React.FC<BoardProgressCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="mb-4 break-inside-avoid cursor-pointer transform transition-transform active:scale-[0.98]"
    >
      <div className="bg-white rounded-3xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100">
        {/* Header */}
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bedroom Makeover</p>
        </div>

        {/* Content Preview Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
            <img 
              src="https://picsum.photos/id/102/300/400" 
              className="w-full h-full object-cover" 
              alt="Option A" 
            />
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
             <img 
              src="https://picsum.photos/id/103/300/400" 
              className="w-full h-full object-cover" 
              alt="Option B" 
            />
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 mb-4 leading-snug">
          You were deciding between these ideas
        </p>

        {/* CTA */}
        <div className="flex items-center text-gray-900 font-semibold text-sm">
          <span>Refine this a bit</span>
          <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};
