import React, { useState } from 'react';
import { AppScreen, PinStackData } from './types';
import { HomeFeed } from './screens/HomeFeed';
import { DecisionView } from './screens/DecisionView';
import { DeclutteredBoard } from './screens/DeclutteredBoard';
import { BoardsList } from './screens/BoardsList';
import { StackDetailView } from './screens/StackDetailView';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME_FEED);
  const [activeBoardId, setActiveBoardId] = useState<string | null>(null);
  const [activeStack, setActiveStack] = useState<PinStackData | null>(null);

  const navigateToDecision = () => setCurrentScreen(AppScreen.DECISION_VIEW);
  
  const navigateToBoard = (boardId: string = 'bedroom-makeover') => {
    setActiveBoardId(boardId);
    setCurrentScreen(AppScreen.DECLUTTERED_BOARD);
  };

  const navigateToStack = (stack: PinStackData) => {
    setActiveStack(stack);
    setCurrentScreen(AppScreen.STACK_DETAIL);
  };

  const navigateHome = () => setCurrentScreen(AppScreen.HOME_FEED);
  const navigateToBoardsList = () => setCurrentScreen(AppScreen.BOARDS_LIST);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
      {currentScreen === AppScreen.HOME_FEED && (
        <HomeFeed 
          onOpenCard={navigateToDecision} 
          onOpenBoard={() => navigateToBoard('bedroom-makeover')} // Default for quick nav
          onProfileClick={navigateToBoardsList}
          onBoardsClick={navigateToBoardsList}
        />
      )}

      {currentScreen === AppScreen.BOARDS_LIST && (
        <BoardsList 
          onBoardClick={navigateToBoard}
          onHomeClick={navigateHome}
        />
      )}
      
      {currentScreen === AppScreen.DECISION_VIEW && (
        <DecisionView 
          onComplete={() => navigateToBoard(activeBoardId || 'bedroom-makeover')} 
          onClose={navigateHome}
        />
      )}

      {currentScreen === AppScreen.DECLUTTERED_BOARD && (
        <DeclutteredBoard 
          boardId={activeBoardId}
          onBack={navigateHome} 
          onRefine={navigateToDecision}
          onStackClick={navigateToStack}
        />
      )}

      {currentScreen === AppScreen.STACK_DETAIL && (
        <StackDetailView 
          stack={activeStack}
          onClose={() => setCurrentScreen(AppScreen.DECLUTTERED_BOARD)}
        />
      )}
    </div>
  );
};

export default App;