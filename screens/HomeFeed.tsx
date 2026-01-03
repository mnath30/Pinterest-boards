import React from 'react';
import { MOCK_PINS } from '../constants.ts';
import { PinCard } from '../components/PinCard.tsx';
import { BoardProgressCard } from '../components/BoardProgressCard.tsx';
import { Navigation } from '../components/Navigation.tsx';
import { RecentBoards } from '../components/RecentBoards.tsx';

interface HomeFeedProps {
  onOpenCard: () => void;
  onOpenBoard: () => void;
  onProfileClick: () => void;
  onBoardsClick: () => void;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({ onOpenCard, onOpenBoard, onProfileClick, onBoardsClick }) => {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center border-b border-transparent shadow-sm">
        <div className="w-8 h-8 mr-4 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" 
            alt="Pinterest" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex gap-6 flex-1 justify-center sm:justify-start -ml-12 sm:ml-0">
          <span className="text-base font-bold text-gray-900 relative pb-1 cursor-default">
            For you
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-900 rounded-full"></div>
          </span>
          <span 
            onClick={onBoardsClick}
            className="text-base font-semibold text-gray-500 cursor-pointer hover:text-gray-900 transition-colors"
          >
            Boards
          </span>
        </div>
      </div>

      <RecentBoards onBoardClick={onOpenBoard} />

      <div className="px-4 pt-4">
        <h3 className="mb-4 text-sm font-bold text-gray-900">Recommended for you</h3>
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4">
          <BoardProgressCard onClick={onOpenCard} />
          {MOCK_PINS.map((pin) => (
            <PinCard key={pin.id} pin={pin} />
          ))}
          {MOCK_PINS.slice(0, 8).map((pin) => (
            <PinCard key={`${pin.id}-copy`} pin={pin} />
          ))}
        </div>
      </div>

      <Navigation onProfileClick={onProfileClick} activeTab="home" />
    </div>
  );
};