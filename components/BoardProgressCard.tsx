import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BoardProgressCardProps {
  onClick: () => void;
}

export const BoardProgressCard: React.FC<BoardProgressCardProps> = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="mb-6 break-inside-avoid cursor-pointer transform transition-transform active:scale-[0.98]"
    >
      <div className="bg-white rounded-[2rem] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50">
        <div className="mb-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E60023] animate-pulse" />
          <p className="text-xs font-bold text-[#E60023] uppercase tracking-wider">Refine Board</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
            <img 
              src="https://picsum.photos/id/102/300/400" 
              className="w-full h-full object-cover" 
              alt="Option A" 
            />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
             <img 
              src="https://picsum.photos/id/103/300/400" 
              className="w-full h-full object-cover" 
              alt="Option B" 
            />
          </div>
        </div>

        <h4 className="text-[15px] font-bold text-gray-900 mb-1">Bedroom Makeover</h4>
        <p className="text-sm text-gray-500 mb-4 leading-snug">
          Decide between your top saves to narrow your look.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#E60023] font-bold text-sm bg-red-50 px-4 py-2 rounded-full">
            <span>Start decision loop</span>
            <ArrowRight size={14} className="ml-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
};