export interface Pin {
  id: string;
  imageUrl: string;
  title: string;
  heightRatio: number;
  isPromoted?: boolean;
}

export interface PinStackData {
  id: string;
  title: string;
  count: number;
  coverUrl: string;
  pins: Pin[];
}

export interface BoardSection {
  title: string;
  stacks: PinStackData[];
}

export interface Board {
  id: string;
  title: string;
  pinCount: number;
  lastUpdated: string;
  coverImages: string[]; // For the board preview card
  strongestPins: Pin[];
  sections: BoardSection[];
}

export enum AppScreen {
  HOME_FEED = 'HOME_FEED',
  DECISION_VIEW = 'DECISION_VIEW',
  DECLUTTERED_BOARD = 'DECLUTTERED_BOARD',
  BOARDS_LIST = 'BOARDS_LIST',
  STACK_DETAIL = 'STACK_DETAIL'
}