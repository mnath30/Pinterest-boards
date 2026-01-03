import React from 'react';
import { ChevronLeft, MoreHorizontal, Filter, Plus, Star, Sparkles } from 'lucide-react';
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
  const board = MOCK_BOARDS.find(b => b.id === boardId) || MOCK_BOARDS[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-4 py-3 flex items-center justify-between transition-shadow shadow-sm">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft size={28} className="text-gray-900" />
        </button>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
             <Filter size={24} className="text-gray-900" />
          </button>
           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
             <MoreHorizontal size={24} className="text-gray-900" />
          </button>
        </div>
      </div>

      <div className="px-6 pb-2 text-center animate-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-0.5 tracking-tight">{board.title}</h1>
        <p className="text-sm font-medium text-gray-500">{board.pinCount} ideas • {board.sections.length} groups</p>
      </div>

      <div className="px-6 mt-4 mb-8 text-center animate-in fade-in duration-700 delay-75">
        <p className="text-gray-900 text-[18px] sm:text-[22px] font-bold mb-4 tracking-tight">Looks like you’ve narrowed this down.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button 
            onClick={onRefine}
            className="w-full sm:w-auto px-8 py-3 bg-[#E60023] hover:bg-[#ad001a] rounded-full text-sm font-bold text-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles size={16} fill="white" />
            <span>Start decision loop</span>
          </button>
          <button 
            className="w-full sm:w-auto px-8 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-bold text-gray-900 transition-all active:scale-95"
          >
            Keep exploring
          </button>
        </div>
      </div>

      {/* Strongest Ideas - Horizontal Scroll on all screens but bigger cards on desktop */}
      <div className="mb-12 animate-in fade-in zoom-in duration-700 delay-100 max-w-7xl mx-auto">
        <div className="px-6 mb-4 flex items-center gap-2">
            <div className="bg-yellow-100 p-1.5 rounded-full">
              <Star size={16} className="text-yellow-600 fill-yellow-600" />
            </div>
            <h3 className="text-[15px] font-bold text-gray-900">Your strongest ideas</h3>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 pb-6 no-scrollbar snap-x snap-mandatory">
            {board.strongestPins.map((pin) => (
                <div key={pin.id} className="snap-center shrink-0 w-[80vw] sm:w-[400px] md:w-[450px]">
                    <div className="rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-xl relative aspect-[3/4] group cursor-pointer">
                        <img 
                            src={pin.imageUrl} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            alt={pin.title} 
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 pt-24 opacity-90 group-hover:opacity-100 transition-opacity">
                            <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">{pin.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
            <div className="w-4 shrink-0" />
        </div>
      </div>

      <div className="pb-24 animate-in slide-in-from-bottom-8 duration-700 delay-200 max-w-7xl mx-auto">
        <div className="px-6 mb-8">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.1em]">All other ideas</h3>
        </div>

        {board.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <div className="px-6 mb-5 flex items-baseline justify-between">
               <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h3>
               <span className="text-sm font-bold text-gray-400 cursor-pointer hover:text-gray-900 transition-colors">See all</span>
            </div>
            
            {/* Responsive Grid for Stacks */}
            <div className="px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-10">
              {section.stacks.map((stack) => (
                <div key={stack.id} onClick={() => onStackClick(stack)}>
                  <PinStack 
                    title={stack.title}
                    count={stack.count}
                    coverUrl={stack.coverUrl}
                  />
                </div>
              ))}
              
              {idx === 0 && (
                 <div className="aspect-square rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:border-[#E60023] hover:text-[#E60023] transition-all bg-gray-50/50 hover:bg-red-50/30 group">
                  <Plus size={28} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm font-bold">Add idea</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-gray-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap">
          Shop this look
        </button>
      </div>
    </div>
  );
};