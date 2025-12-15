import React from 'react';

interface PinStackProps {
  title: string;
  count: number;
  coverUrl: string;
}

export const PinStack: React.FC<PinStackProps> = ({ title, count, coverUrl }) => {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      <div className="relative aspect-square w-full">
        {/* Back Card 2 (Deepest) */}
        <div className="absolute inset-0 bg-gray-200 rounded-2xl transform rotate-6 translate-x-3 translate-y-1 shadow-sm border border-white/50 transition-transform group-hover:rotate-12 group-hover:translate-x-5" />
        
        {/* Back Card 1 (Middle) */}
        <div className="absolute inset-0 bg-gray-300 rounded-2xl transform -rotate-3 -translate-x-1 shadow-sm border border-white/50 transition-transform group-hover:-rotate-6 group-hover:-translate-x-3" />
        
        {/* Front Card */}
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100">
          <img 
            src={coverUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Count Badge */}
          {count > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full">
              +{count}
            </div>
          )}
        </div>
      </div>
      
      {/* Title */}
      <h4 className="text-sm font-medium text-gray-900 leading-tight px-1">{title}</h4>
    </div>
  );
};
