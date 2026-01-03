import React from 'react';
import { Settings, Plus, Sparkles } from 'lucide-react';
import { MOCK_BOARDS } from '../constants.ts';
import { Navigation } from '../components/Navigation.tsx';

interface BoardsListProps {
  onBoardClick: (boardId: string) => void;
  onHomeClick: () => void;
  onRefineBoard?: (boardId: string) => void;
}

export const BoardsList: React.FC<BoardsListProps> = ({ onBoardClick, onHomeClick, onRefineBoard }) => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top Brand Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center border-b border-transparent shadow-sm">
        <div className="w-8 h-8 mr-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={onHomeClick}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" 
            alt="Pinterest" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1" />
        <div className="flex gap-4">
          <Plus size={24} className="text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded-full" />
          <Settings size={24} className="text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded-full" />
        </div>
      </div>

      {/* Profile Header */}
      <div className="pt-8 pb-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-sm transition-transform hover:scale-105">
          <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Jessica Smith</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">@jessica_designs</p>
        
        <div className="flex gap-2 mt-6">
           <button className="bg-gray-100 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95">
             Share
           </button>
           <button className="bg-gray-100 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95">
             Edit Profile
           </button>
        </div>
      </div>

      {/* Boards Grid - Responsive Columns */}
      <div className="px-4 pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10 max-w-7xl mx-auto">
        {MOCK_BOARDS.map((board) => (
          <div 
            key={board.id} 
            className="group cursor-pointer flex flex-col"
          >
            {/* Board Preview Collage */}
            <div 
              onClick={() => onBoardClick(board.id)}
              className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 relative mb-4 flex shadow-sm border border-gray-100 transition-all active:scale-95 group-hover:shadow-xl group-hover:-translate-y-1"
            >
              {/* Main Left Image */}
              <div className="w-2/3 h-full border-r border-white">
                <img src={board.coverImages[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cover 1" />
              </div>
              {/* Right Column Images */}
              <div className="w-1/3 h-full flex flex-col">
                <div className="h-1/2 border-b border-white">
                  <img src={board.coverImages[1] || board.coverImages[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cover 2" />
                </div>
                <div className="h-1/2">
                  <img src={board.coverImages[2] || board.coverImages[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cover 3" />
                </div>
              </div>
              
              {/* Refine Shortcut Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onRefineBoard?.(board.id);
                }}
                className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-white/50 hover:bg-[#E60023] hover:text-white text-[#E60023] transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                title="Start decision loop"
              >
                <Sparkles size={18} fill="currentColor" />
              </button>

              <div className="absolute inset-0 bg-black/5 opacity-0 group-active:opacity-100 transition-opacity" />
            </div>

            {/* Board Info */}
            <div className="px-2">
              <h3 className="text-[16px] font-bold text-gray-900 leading-tight truncate group-hover:text-[#E60023] transition-colors">{board.title}</h3>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">{board.pinCount} pins</span>
                {board.id === 'bedroom-makeover' && (
                  <div className="flex items-center gap-1.5">
                     <span className="text-[10px] font-bold text-[#E60023]">ACTION NEEDED</span>
                     <span className="flex h-2 w-2 rounded-full bg-[#E60023] animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navigation activeTab="profile" onHomeClick={onHomeClick} onProfileClick={() => {}} />
    </div>
  );
};