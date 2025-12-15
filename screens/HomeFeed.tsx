import React from 'react';
import { MOCK_PINS } from '../constants';
import { PinCard } from '../components/PinCard';
import { BoardProgressCard } from '../components/BoardProgressCard';
import { Navigation } from '../components/Navigation';
import { RecentBoards } from '../components/RecentBoards';

interface HomeFeedProps {
  onOpenCard: () => void;
  onOpenBoard: () => void;
  onProfileClick: () => void;
  onBoardsClick: () => void;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({ onOpenCard, onOpenBoard, onProfileClick, onBoardsClick }) => {
  // Split pins into two columns for masonry effect
  const leftColPins = MOCK_PINS.filter((_, i) => i % 2 === 0);
  const rightColPins = MOCK_PINS.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center justify-center border-b border-transparent">
        <div className="flex gap-6">
          <span className="text-base font-semibold text-gray-900 border-b-2 border-black pb-1 cursor-pointer">All</span>
          <span 
            onClick={onBoardsClick}
            className="text-base font-medium text-gray-500 cursor-pointer hover:text-gray-900 transition-colors"
          >
            Boards
          </span>
        </div>
      </div>

      {/* Recent Activity Section - Now navigates to Board */}
      <RecentBoards onBoardClick={onOpenBoard} />

      {/* Masonry Grid */}
      <div className="px-2 pt-0">
        <h3 className="px-2 mb-3 text-sm font-semibold text-gray-900">More ideas for you</h3>
        <div className="flex gap-2">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col">
            {leftColPins.map((pin, index) => (
              <React.Fragment key={pin.id}>
                {/* Feed Card shortcut navigates to Decision/Refine */}
                {index === 1 && <BoardProgressCard onClick={onOpenCard} />}
                <PinCard pin={pin} />
              </React.Fragment>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col">
             {rightColPins.map((pin) => (
                <PinCard key={pin.id} pin={pin} />
             ))}
          </div>
        </div>
      </div>

      <Navigation onProfileClick={onProfileClick} />
    </div>
  );
};