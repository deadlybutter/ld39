export const SPAWN_CELLS_PER_PLAYER = 4;

import { MODE_SETUP, MODE_PLAY } from './UpdateManager';

class RulesManager {
  constructor() {

  }

  update(game) {
    const currentMode = game.updateManager.mode;

    // Rule: Initiate play when both sides place all their cells down
    if (currentMode === MODE_SETUP) {
      let totalCells = 0;

      game.entityIterator(e => {
        if (e.type === 'cell' && e.team === 1) totalCells++;
      });

      if (totalCells >= SPAWN_CELLS_PER_PLAYER) {
        // TODO: Tell AI to spawn.
        game.updateManager.changeMode(MODE_PLAY);
      }
    }
    // end rule //
  }
}

export default RulesManager;
