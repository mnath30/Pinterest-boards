import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Pin } from '../types.ts';

interface DecisionViewProps {
  boardTitle: string;
  pins: Pin[];
  onComplete: () => void;
  onClose: () => void;
}

export const DecisionView: React.FC<DecisionViewProps> = ({ boardTitle, pins, onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const comparisons = [];
  for (let i = 0; i < pins.length - 1; i += 2) {
    comparisons.push({ left: pins[i], right: pins[i + 1] });
  }

  if (comparisons.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-xl font-bold mb-4">Not enough ideas to compare yet!</h2>
        <button onClick={onClose} className="bg-[#E60023] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform active:scale-95">
          Go back
        </button>
      </div>
    );
  }

  const currentPair = comparisons[step];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setTimeout(() => {
      if (step < comparisons.length - 1) {
        setStep(prev => prev + 1);
        setSelectedId(null);
      } else {
        onComplete();
      }
    }, 450);
  };

  if (!currentPair) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-300">
      <div className="px-6 pt-6 pb-2 flex justify-between items-start max-w-5xl mx-auto w-full">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" 
              alt="Pinterest" 
              className="w-5 h-5 object-contain"
            />
            <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">{boardTitle}</h2>
          </div>
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Step {step + 1} of {comparisons.length}</p>
        </div>
        <button onClick={onClose} className="absolute right-6 top-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <X size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-24">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 h-[70vh] sm:h-[60vh] max-w-6xl mx-auto w-full">
          <div 
            onClick={() => handleSelect(currentPair.left.id)}
            className={`
              flex-1 relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl
              ${selectedId === currentPair.left.id ? 'ring-[6px] ring-[#E60023] scale-[0.98] z-10' : 'hover:scale-[1.02]'}
              ${selectedId === currentPair.right.id ? 'opacity-30 grayscale-[50%] scale-95 blur-[2px]' : ''}
              group
            `}
          >
            <img 
              src={currentPair.left.imageUrl} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Option A" 
            />
            {selectedId === currentPair.left.id && (
              <div className="absolute inset-0 bg-[#E60023]/20 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white rounded-full p-5 shadow-2xl animate-in zoom-in-50 duration-300">
                  <Check size={32} strokeWidth={4} className="text-[#E60023]" />
                </div>
              </div>
            )}
          </div>

          <div 
            onClick={() => handleSelect(currentPair.right.id)}
            className={`
              flex-1 relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 shadow-xl
              ${selectedId === currentPair.right.id ? 'ring-[6px] ring-[#E60023] scale-[0.98] z-10' : 'hover:scale-[1.02]'}
              ${selectedId === currentPair.left.id ? 'opacity-30 grayscale-[50%] scale-95 blur-[2px]' : ''}
              group
            `}
          >
            <img 
              src={currentPair.right.imageUrl} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Option B" 
            />
            {selectedId === currentPair.right.id && (
              <div className="absolute inset-0 bg-[#E60023]/20 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white rounded-full p-5 shadow-2xl animate-in zoom-in-50 duration-300">
                  <Check size={32} strokeWidth={4} className="text-[#E60023]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pb-16 px-8 text-center max-w-xl mx-auto">
        <p className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Which one stays?</p>
        <p className="text-sm sm:text-base text-gray-500 mt-2 font-medium">Choose the idea that resonates most with your vision.</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-100">
         <div 
            className="h-full bg-[#E60023] transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / comparisons.length) * 100}%` }}
         />
      </div>
    </div>
  );
};