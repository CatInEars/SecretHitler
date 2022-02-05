export interface IBoardCase {
  position: number;
  hasCard: boolean;
  effect?: 'SPECTATE_ROLE' | 'KILL' | 'SELECT_PRESIDENT' | 'SPECTATE_CARDS';
}
