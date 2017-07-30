export const SPAWN_CELLS_PER_PLAYER = 4;

import { MODE_SETUP, MODE_PLAY, MODE_END } from './UpdateManager';

class RulesManager {
  update(game) {
    const currentMode = game.updateManager.mode;

    // Rule: Initiate play when both sides place all their cells down
    if (currentMode === MODE_SETUP) {
      let totalCells = 0;

      game.entityIterator(e => {
        if (e.type === 'cell' && e.team === 1) totalCells++;
      });

      if (totalCells >= SPAWN_CELLS_PER_PLAYER) {
        game.botManager.spawn(game);
        game.updateManager.changeMode(MODE_PLAY);
      }
    }
    // end rule //

    // Rule: If any team has no cells left, game over.
    if (currentMode === MODE_PLAY) {
      let team1Total = 0;
      let team2Total = 0;

      game.entityIterator(e => {
        if (e.type === 'cell') {
          e.team === 1 ? team1Total++ : team2Total++;
        }
      });

      if (team1Total === 0 || team2Total === 0) {
        game.updateManager.changeMode(MODE_END);
      }
    }
    // end rule //
  }
}

export default RulesManager;
