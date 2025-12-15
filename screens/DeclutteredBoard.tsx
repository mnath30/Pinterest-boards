import React from 'react';
import { ChevronLeft, MoreHorizontal, Filter, Plus, Sparkles, Star } from 'lucide-react';
import { MOCK_BOARDS } from '../constants';
import { PinStack } from '../components/PinStack';
import { PinStackData } from '../types';

interface DeclutteredBoardProps {
  boardId: string | null;
  onBack: () => void;
  onRefine: () => void;
  onStackClick: (stack: PinStackData) => void;
}

export const DeclutteredBoard: React.FC<DeclutteredBoardProps> = ({ boardId, onBack, onRefine, onStackClick }) => {
  // Find the board data
  const board = MOCK_BOARDS.find(b => b.id === boardId) || MOCK_BOARDS[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center justify-between transition-shadow shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft size={28} className="text-gray-900" />
        </button>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
             <Filter size={24} className="text-gray-900" />
          </button>
           <button className="p-2 hover:bg-gray-100 rounded-full">
             <MoreHorizontal size={24} className="text-gray-900" />
          </button>
        </div>
      </div>

      <div className="px-6 pb-2 text-center animate-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{board.title}</h1>
        <p className="text-sm text-gray-500">{board.pinCount} ideas • {board.sections.length} groups</p>
      </div>

      {/* Refine Micro-Decision Loop CTA */}
      <div className="px-6 mb-8 flex justify-center animate-in fade-in duration-700 delay-75">
        <button 
          onClick={onRefine}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-sm font-semibold text-white shadow-lg shadow-gray-200 transition-all hover:scale-105 active:scale-95"
        >
          <Sparkles size={14} className="text-yellow-200" />
          Refine this board
        </button>
      </div>

      {/* Auto-Summary "Best of" Section */}
      <div className="mb-10 animate-in fade-in zoom-in duration-700 delay-100">
        <div className="px-6 mb-4 flex items-center gap-2">
            <div className="bg-yellow-100 p-1 rounded-full">
              <Star size={14} className="text-yellow-600 fill-yellow-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Your strongest ideas</h3>
        </div>
        
        {/* Horizontal scroll for best pins */}
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 no-scrollbar snap-x snap-mandatory">
            {board.strongestPins.map((pin) => (
                <div key={pin.id} className="snap-center shrink-0 w-[75vw] sm:w-[320px]">
                    <div className="rounded-[2rem] overflow-hidden bg-gray-50 shadow-md relative aspect-[3/4]">
                        <img 
                            src={pin.imageUrl} 
                            className="w-full h-full object-cover" 
                            alt={pin.title} 
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                            <h3 className="text-white text-xl font-bold leading-tight">{pin.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
             {/* Spacer for right padding in scroll */}
            <div className="w-2 shrink-0" />
        </div>
      </div>

      {/* Grouped Sections */}
      <div className="pb-24 animate-in slide-in-from-bottom-8 duration-700 delay-200">
        <div className="px-6 mb-6">
             <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">All other ideas</h3>
        </div>

        {board.sections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <div className="px-6 mb-4 flex items-baseline justify-between">
               <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
               <span className="text-xs font-medium text-gray-400">See all</span>
            </div>
            
            <div className="px-4 grid grid-cols-2 gap-x-4 gap-y-6">
              {section.stacks.map((stack) => (
                <div key={stack.id} onClick={() => onStackClick(stack)}>
                  <PinStack 
                    title={stack.title}
                    count={stack.count}
                    coverUrl={stack.coverUrl}
                  />
                </div>
              ))}
              
              {/* Add Button for first section only to demo UI */}
              {idx === 0 && (
                 <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:border-gray-300 hover:text-gray-500 transition-colors bg-gray-50/50">
                  <Plus size={24} />
                  <span className="text-xs font-medium">Add idea</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button className="bg-white text-gray-900 px-6 py-3.5 rounded-full font-bold shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap">
          Shop this look
        </button>
      </div>
    </div>
  );
};
