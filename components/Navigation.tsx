import React from 'react';
import { Home, Search, Plus, MessageCircle, User } from 'lucide-react';

interface NavigationProps {
  onProfileClick?: () => void;
  onHomeClick?: () => void;
  activeTab?: 'home' | 'profile';
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onProfileClick, 
  onHomeClick,
  activeTab = 'home'
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 pb-8 flex justify-between items-center z-50">
      <div 
        className="flex flex-col items-center gap-1 cursor-pointer"
        onClick={onHomeClick}
      >
        <Home size={26} className={activeTab === 'home' ? "text-gray-900 fill-current" : "text-gray-400"} />
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <Search size={26} className="text-gray-400" />
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <Plus size={26} className="text-gray-400" />
      </div>
      <div className="flex flex-col items-center gap-1 cursor-pointer">
        <MessageCircle size={26} className="text-gray-400" />
      </div>
      <div 
        className="flex flex-col items-center gap-1 cursor-pointer"
        onClick={onProfileClick}
      >
        <div className={`w-[28px] h-[28px] rounded-full overflow-hidden border-2 ${activeTab === 'profile' ? 'border-gray-900' : 'border-transparent'}`}>
          <img src="https://picsum.photos/id/64/100/100" alt="User" />
        </div>
      </div>
    </div>
  );
};