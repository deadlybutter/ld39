import Cell, { BASE_ENERGY } from '../entities/Cell';
import { isSafe } from './CellSpawnHelper';

class BotManager {
  constructor() {
    this.bots = [];
  }

  spawn(game) {
    const rows = game.canvas.height / BASE_ENERGY;
    const cols = game.canvas.width / BASE_ENERGY;
    const bots = [];

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const cell = new Cell(x * BASE_ENERGY, y * BASE_ENERGY, 2);
        if (isSafe(cell, game)) bots.push(cell);
      }
    }

    while (this.bots.length < 4) {
      const pickIndex = Math.floor(Math.random() * bots.length);
      const pick = bots.splice(pickIndex, 1)[0];
      if (! pick) break;
      if (! isSafe(pick, game)) continue;

      this.bots.push(pick);
      game.addEntity(pick);
    }
  }

  update(game) {

  }
}

export default BotManager;
