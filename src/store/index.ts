import {BoardStore} from './BoardStore';
import {CardStore} from './CardsStore';
import {PlayersStore} from './PlayersStore';

export interface IRootStore {
  playersStore: PlayersStore;
  boardStore: BoardStore;
  cardsStore: CardStore;
}

class RootStore {
  playersStore: PlayersStore;
  boardStore: BoardStore;
  cardsStore: CardStore;

  constructor() {
    this.playersStore = new PlayersStore();
    this.boardStore = new BoardStore();
    this.cardsStore = new CardStore();
  }
}

export default new RootStore();
