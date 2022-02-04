import {PlayersStore} from './PlayersStore';

export interface IRootStore {
  playersStore: PlayersStore;
}

class RootStore implements IRootStore {
  playersStore: PlayersStore;

  constructor() {
    this.playersStore = new PlayersStore();
  }
}

export default new RootStore();
