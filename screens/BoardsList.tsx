import React from 'react';
import { Settings, Plus, MoreHorizontal } from 'lucide-react';
import { MOCK_BOARDS } from '../constants';
import { Navigation } from '../components/Navigation';

interface BoardsListProps {
  onBoardClick: (boardId: string) => void;
  onHomeClick: () => void;
}

export const BoardsList: React.FC<BoardsListProps> = ({ onBoardClick, onHomeClick }) => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Profile Header */}
      <div className="pt-10 pb-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
          <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Jessica Smith</h1>
        <p className="text-gray-500 text-sm mt-1">@jessica_designs</p>
        
        <div className="flex gap-2 mt-4">
           <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
             Share
           </button>
           <button className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
             Edit Profile
           </button>
        </div>
      </div>

      {/* Tools / Filters */}
      <div className="sticky top-0 bg-white z-40 px-4 pb-2">
         <div className="flex justify-between items-center py-2">
            <div className="relative flex-1 mr-4">
              <input 
                type="text" 
                placeholder="Search your pins" 
                className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="flex gap-3">
              <Plus size={24} className="text-gray-900" />
              <Settings size={24} className="text-gray-900" />
            </div>
         </div>
      </div>

      {/* Boards Grid */}
      <div className="px-4 pt-2 grid grid-cols-2 gap-x-3 gap-y-6">
        {MOCK_BOARDS.map((board) => (
          <div 
            key={board.id} 
            onClick={() => onBoardClick(board.id)}
            className="group cursor-pointer"
          >
            {/* Board Preview Collage */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative mb-2 flex">
              {/* Main Left Image */}
              <div className="w-2/3 h-full border-r border-white">
                <img src={board.coverImages[0]} className="w-full h-full object-cover" alt="Cover 1" />
              </div>
              {/* Right Column Images */}
              <div className="w-1/3 h-full flex flex-col">
                <div className="h-1/2 border-b border-white">
                  <img src={board.coverImages[1] || board.coverImages[0]} className="w-full h-full object-cover" alt="Cover 2" />
                </div>
                <div className="h-1/2">
                  <img src={board.coverImages[2] || board.coverImages[0]} className="w-full h-full object-cover" alt="Cover 3" />
                </div>
              </div>
              
              {/* Active Overlay (Visual Touch Feedback) */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-active:opacity-100 transition-opacity" />
            </div>

            {/* Board Info */}
            <h3 className="text-sm font-bold text-gray-900 leading-tight truncate">{board.title}</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-gray-500">{board.pinCount} pins • {board.lastUpdated}</span>
            </div>
          </div>
        ))}
      </div>

      <Navigation activeTab="profile" onHomeClick={onHomeClick} onProfileClick={() => {}} />
    </div>
  );
};