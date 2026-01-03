import React from 'react';
import { ChevronRight } from 'lucide-react';

interface RecentBoardsProps {
  onBoardClick: () => void;
}

export const RecentBoards: React.FC<RecentBoardsProps> = ({ onBoardClick }) => {
  return (
    <div className="pt-4 pb-8 max-w-7xl mx-auto">
      <div className="px-4 mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-[18px] font-bold text-gray-900 tracking-tight">Jump back in</h2>
          <p className="text-sm font-semibold text-gray-400">Finish refining your top boards</p>
        </div>
      </div>

      <div className="flex gap-5 px-4 overflow-x-auto no-scrollbar pb-2">
        {/* Active Refining Board */}
        <div 
          onClick={onBoardClick}
          className="w-40 sm:w-48 flex-shrink-0 cursor-pointer group"
        >
          <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-3 bg-gray-100 border border-transparent shadow-md group-active:scale-95 group-hover:shadow-lg transition-all duration-300">
            <img 
              src="https://picsum.photos/id/674/500/500" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Bedroom Makeover" 
            />
            <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md py-3 px-3 flex items-center justify-center gap-2 border-t border-white/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E60023] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E60023]"></span>
              </span>
              <span className="text-[11px] font-extrabold text-[#E60023] leading-none uppercase tracking-widest">Refine Now</span>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-900 truncate px-1 group-hover:text-[#E60023] transition-colors">Bedroom Sanctuary</p>
          <div className="flex items-center text-gray-500 mt-1 px-1">
            <span className="text-[11px] font-bold text-gray-400">2 matches found</span>
            <ChevronRight size={12} className="ml-1 text-gray-300" />
          </div>
        </div>

        {/* Static Boards */}
        <div className="w-40 sm:w-48 flex-shrink-0 cursor-pointer group">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-3 bg-gray-100 shadow-md group-active:scale-95 group-hover:shadow-lg transition-all duration-300">
             <img 
              src="https://picsum.photos/id/445/500/500" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Coastal Summer" 
            />
          </div>
          <p className="text-sm font-bold text-gray-900 truncate px-1 group-hover:text-[#E60023] transition-colors">Coastal Summer</p>
          <p className="text-[11px] font-bold text-gray-400 mt-1 px-1 uppercase tracking-tighter">Updated yesterday</p>
        </div>

        <div className="w-40 sm:w-48 flex-shrink-0 cursor-pointer group">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-3 bg-gray-100 shadow-md group-active:scale-95 group-hover:shadow-lg transition-all duration-300">
             <img 
              src="https://picsum.photos/id/43/500/500" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Modern Forms" 
            />
          </div>
          <p className="text-sm font-bold text-gray-900 truncate px-1 group-hover:text-[#E60023] transition-colors">Modern Forms</p>
          <p className="text-[11px] font-bold text-gray-400 mt-1 px-1 uppercase tracking-tighter">156 ideas</p>
        </div>
      </div>
    </div>
  );
};