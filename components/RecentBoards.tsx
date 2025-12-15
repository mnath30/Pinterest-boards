import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RecentBoardsProps {
  onBoardClick: () => void;
}

export const RecentBoards: React.FC<RecentBoardsProps> = ({ onBoardClick }) => {
  return (
    <div className="pt-2 pb-6">
      {/* Nudge Header */}
      <div className="px-4 mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Pick up where you left off</h2>
          <p className="text-xs text-gray-500 mt-0.5">You have unsorted ideas in these boards</p>
        </div>
      </div>

      {/* Horizontal Scroll/Flex for Recent Boards */}
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
        
        {/* Board 1 - Active State */}
        <div 
          onClick={onBoardClick}
          className="w-32 flex-shrink-0 cursor-pointer group"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden mb-2 bg-gray-100 border border-gray-100 shadow-sm group-active:scale-95 transition-transform">
            <img 
              src="https://picsum.photos/id/102/300/300" 
              className="w-full h-full object-cover" 
              alt="Bedroom Makeover" 
            />
            {/* Overlay Notification */}
            <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md py-2 px-2 flex items-center justify-center gap-1.5 border-t border-white/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold text-gray-900 leading-none">Review</span>
            </div>
          </div>
          <p className="text-xs font-semibold text-gray-900 truncate">Bedroom Makeover</p>
          <div className="flex items-center text-gray-500 mt-0.5">
            <span className="text-[10px]">2 new matches</span>
            <ArrowRight size={10} className="ml-1" />
          </div>
        </div>

        {/* Board 2 - Static */}
        <div className="w-32 flex-shrink-0 cursor-pointer group">
          <div className="relative aspect-square rounded-2xl overflow-hidden mb-2 bg-gray-100 border border-gray-100 shadow-sm group-active:scale-95 transition-transform">
             <img 
              src="https://picsum.photos/id/106/300/300" 
              className="w-full h-full object-cover opacity-90" 
              alt="Summer Outfit" 
            />
          </div>
          <p className="text-xs font-semibold text-gray-900 truncate">Summer Outfit</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Updated yesterday</p>
        </div>

      </div>
    </div>
  );
};
