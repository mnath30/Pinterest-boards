import React, { useState } from 'react';
import { AppScreen, PinStackData } from './types';
import { HomeFeed } from './screens/HomeFeed';
import { DecisionView } from './screens/DecisionView';
import { DeclutteredBoard } from './screens/DeclutteredBoard';
import { BoardsList } from './screens/BoardsList';
import { StackDetailView } from './screens/StackDetailView';
import { MOCK_BOARDS } from './constants';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME_FEED);
  const [activeBoardId, setActiveBoardId] = useState<string | null>(null);
  const [activeStack, setActiveStack] = useState<PinStackData | null>(null);

  const navigateToDecision = (boardId?: string) => {
    const id = boardId || 'bedroom-makeover';
    setActiveBoardId(id);
    setCurrentScreen(AppScreen.DECISION_VIEW);
  };
  
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

  // Helper to get board data for the current active board
  const activeBoard = MOCK_BOARDS.find(b => b.id === (activeBoardId || 'bedroom-makeover')) || MOCK_BOARDS[0];

  return (
    <div className="w-full bg-white min-h-screen relative overflow-x-hidden font-sans text-gray-900">
      <div className="mx-auto w-full">
        {currentScreen === AppScreen.HOME_FEED && (
          <HomeFeed 
            onOpenCard={() => navigateToDecision('bedroom-makeover')} 
            onOpenBoard={() => navigateToBoard('bedroom-makeover')}
            onProfileClick={navigateToBoardsList}
            onBoardsClick={navigateToBoardsList}
          />
        )}

        {currentScreen === AppScreen.BOARDS_LIST && (
          <BoardsList 
            onBoardClick={navigateToBoard}
            onHomeClick={navigateHome}
            onRefineBoard={(id) => navigateToDecision(id)}
          />
        )}
        
        {currentScreen === AppScreen.DECISION_VIEW && (
          <DecisionView 
            boardTitle={activeBoard.title}
            pins={activeBoard.strongestPins}
            onComplete={() => navigateToBoard(activeBoardId || 'bedroom-makeover')} 
            onClose={navigateHome}
          />
        )}

        {currentScreen === AppScreen.DECLUTTERED_BOARD && (
          <DeclutteredBoard 
            boardId={activeBoardId}
            onBack={navigateHome} 
            onRefine={() => navigateToDecision(activeBoardId || 'bedroom-makeover')}
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
    </div>
  );
};

export default App;