import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { BEDROOM_PINS } from '../constants';

interface DecisionViewProps {
  onComplete: () => void;
  onClose: () => void;
}

export const DecisionView: React.FC<DecisionViewProps> = ({ onComplete, onClose }) => {
  const [step, setStep] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Simulate a couple of comparisons
  const comparisons = [
    { left: BEDROOM_PINS[0], right: BEDROOM_PINS[1] },
    { left: BEDROOM_PINS[2], right: BEDROOM_PINS[3] },
  ];

  const currentPair = comparisons[step];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Slight delay to show selection feedback before moving or finishing
    setTimeout(() => {
      if (step < comparisons.length - 1) {
        setStep(prev => prev + 1);
        setSelectedId(null);
      } else {
        onComplete();
      }
    }, 400);
  };

  if (!currentPair) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-300">
      {/* Minimal Top Bar */}
      <div className="px-6 pt-6 pb-2 flex justify-between items-start">
        <div className="flex-1 text-center">
          <h2 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">Bedroom Makeover</h2>
          <p className="text-gray-500 text-xs mt-1">You’ve been coming back to these</p>
        </div>
        <button onClick={onClose} className="absolute right-6 top-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Main Comparison Area */}
      <div className="flex-1 flex flex-col justify-center px-4">
        <div className="flex gap-3 h-[60vh]">
          {/* Left Image */}
          <div 
            onClick={() => handleSelect(currentPair.left.id)}
            className={`
              flex-1 relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300
              ${selectedId === currentPair.left.id ? 'ring-4 ring-black scale-[0.98]' : ''}
              ${selectedId === currentPair.right.id ? 'opacity-40 scale-95' : ''}
            `}
          >
            <img 
              src={currentPair.left.imageUrl} 
              className="w-full h-full object-cover" 
              alt="Option A" 
            />
            {selectedId === currentPair.left.id && (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Check size={24} className="text-black" />
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div 
            onClick={() => handleSelect(currentPair.right.id)}
            className={`
              flex-1 relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300
              ${selectedId === currentPair.right.id ? 'ring-4 ring-black scale-[0.98]' : ''}
              ${selectedId === currentPair.left.id ? 'opacity-40 scale-95' : ''}
            `}
          >
            <img 
              src={currentPair.right.imageUrl} 
              className="w-full h-full object-cover" 
              alt="Option B" 
            />
            {selectedId === currentPair.right.id && (
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Check size={24} className="text-black" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Micro-action prompt */}
      <div className="pb-16 px-8 text-center">
        <p className="text-lg font-medium text-gray-800">
          Which feels more like what you want?
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Tap an image to decide
        </p>
      </div>
    </div>
  );
};
