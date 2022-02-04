export interface IPlayer {
  name: string;
  personRole: PersonRoleType;
  partRole: PartRoleType;
  isAlive: boolean;
}

export type PartRoleType = 'FASCIST' | 'LIBERIAL';

export type PersonRoleType = PartRoleType | 'HITLER';
