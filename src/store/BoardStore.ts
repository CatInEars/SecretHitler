import {makeAutoObservable, runInAction} from 'mobx';
import {Cards} from '../consts/Cards';
import {Effects} from '../consts/Effects';
import {IBoardCase} from '../types/boardType';
import {CardType} from '../types/cardType';

export class BoardStore {
  liberialBoard: IBoardCase[] = [];
  fascistBoard: IBoardCase[] = [];

  constructor() {
    makeAutoObservable(this);

    for (let i = 0; i < 5; i++) {
      this.liberialBoard.push({
        position: i,
        hasCard: false,
      });

      this.fascistBoard.push({
        position: i,
        hasCard: false,
        effect: i < 3 ? undefined : Effects.KILL,
      });
    }
    this.fascistBoard.push({
      position: 5,
      hasCard: false,
    });
  }

  addCard(card: CardType) {
    if (card === Cards.FASCIST) {
      runInAction(() => {
        for (let i = 0; i < this.fascistBoard.length; i++) {
          if (!this.fascistBoard[i].hasCard) {
            this.fascistBoard[i].hasCard = true;
            break;
          }
        }
      });
    } else {
      runInAction(() => {
        for (let i = 0; i < this.liberialBoard.length; i++) {
          if (!this.liberialBoard[i].hasCard) {
            this.liberialBoard[i].hasCard = true;
            break;
          }
        }
      });
    }
  }
}
