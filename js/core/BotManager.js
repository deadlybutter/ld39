const TICKS_PER_LOGIC = 100;

import Cell, { BASE_ENERGY } from '../entities/Cell';
import { isSafe } from './CellSpawnHelper';

class BotManager {
  constructor() {
    this.bots = [];

    this.logicTick = 0;
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

  setTargets(bot, game) {
    const cells = [];
    game.entityIterator(entity => {
      if (entity.type === 'cell' && entity.id !== bot.id) cells.push(entity);
    });

    const ranks = [];
    for (const cell of cells) {
      // Get distance between
      const distance = Math.abs(bot.x - cell.x) + Math.abs(bot.y - cell.y);
      const distanceRank = distance / 100;

      // Prefer enemy team
      const teamRank = cell.team === bot.team ? 10 : 0;

      // Prefer lower shields
      const shieldControl = game.entities[cell.shieldId].control[bot.team];
      const shieldRank = 10 - (shieldControl * 10);

      // Prefer higher energy cells
      const energyRank = 10 - (cell.energy / 10);

      const rank = distanceRank + teamRank + shieldRank + energyRank;

      // console.log({rank, distanceRank, teamRank, shieldRank, energyRank});
      ranks.push({ rank, cell });
    }

    ranks.sort((a, b) => {
      return a.rank - b.rank;
    });

    const targets = [ranks[0].cell.id];
    if (bot.energy > BASE_ENERGY) {
      targets.push(ranks[1].cell.id);
    }

    for (const targetId of targets) {
      bot.target(targetId);
    }
  }

  update(game) {
    this.logicTick++;
    if (this.logicTick < TICKS_PER_LOGIC) return;

    this.logicTick = 0;

    for (const bot of this.bots) {
      bot.clearTargets();
      this.setTargets(bot, game);
    }
  }
}

export default BotManager;
