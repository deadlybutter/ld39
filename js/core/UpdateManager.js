export const MODE_SETUP = 'MODE_SETUP';
export const MODE_PLAY = 'MODE_PLAY';
export const MODE_END = 'MODE_END';

import { update as cellSpawnUpdate } from './CellSpawnHelper';

class UpdateManager {
  constructor() {
    this.mode = MODE_SETUP;

  }

  changeMode(mode) {
    this.mode = mode;
  }

  setupUpdate(game) {
    game.mouseManager.update(game);
    cellSpawnUpdate(game);
    game.mouseManager.reset();
    game.entityIterator(entity => entity.update(game));
  }

  playUpdate(game) {
    game.updateHighlight();
    game.mouseManager.update(game);
    game.entityIterator(entity => entity ? entity.update(game) : null);
    game.particleManager.update(game);
    game.mouseManager.reset();
    game.botManager.update(game);
  }

  endUpdate(game) {

  }

  update(game) {
    switch (this.mode) {
      case MODE_SETUP: this.setupUpdate(game); break;
      case MODE_PLAY: this.playUpdate(game); break;
      case MODE_END: this.endUpdate(game); break;
    }
  }
}

export default UpdateManager;
