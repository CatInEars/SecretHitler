import {makeAutoObservable} from 'mobx';
import {Cards} from '../consts/Cards';
import {shuffle} from '../helpers/shuffle';
import {CardType} from '../types/cardType';

export class CardStore {
  cardsList: CardType[] = [];
  outCardsList: CardType[] = [];

  constructor() {
    makeAutoObservable(this);

    for (let i = 0; i < 17; i++) {
      this.cardsList.push(i < 6 ? Cards.LIBERIAL : Cards.FASCIST);
    }
    shuffle(this.cardsList);
  }

  getCards() {
    if (this.cardsList.length >= 3) {
      return this.cardsList.splice(0, 3);
    } else {
      shuffle(this.outCardsList);
      return [...this.cardsList.splice(0, 2), this.outCardsList.slice(0, 1)];
    }
  }
}
