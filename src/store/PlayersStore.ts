import {makeAutoObservable, runInAction} from 'mobx';
import {PartRole, PersonRole} from '../consts/RoleNames';
import {shuffle} from '../helpers/shuffle';
import {IPlayer, PartRoleType, PersonRoleType} from '../types/playerType';

export class PlayersStore {
  constructor() {
    makeAutoObservable(this);
  }

  playersList: IPlayer[] = [];

  setPlayersList(playersName: string[]) {
    let roleArray: {personRole: PersonRoleType; partRole: PartRoleType}[] = [
      {partRole: PartRole.FASCIST, personRole: PersonRole.FASCIST},
      {partRole: PartRole.FASCIST, personRole: PersonRole.HITLER},
    ];

    for (let i = 0; i < playersName.length - 2; i++) {
      roleArray.push({
        partRole: PartRole.LIBERIAL,
        personRole: PersonRole.LIBERIAL,
      });
    }

    shuffle(roleArray);
    runInAction(() => {
      this.playersList = playersName.map(
        (name, index): IPlayer => ({
          name,
          isAlive: true,
          personRole: roleArray[index].personRole,
          partRole: roleArray[index].partRole,
        }),
      );
    });
  }
}
