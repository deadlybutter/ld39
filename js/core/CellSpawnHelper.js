import Cell from '../entities/Cell';
import { SHIELD_WIDTH, SHIELD_BUFFER } from '../entities/Shield';
import { circleCollide } from '../helpers';

export function isSafe(cell, game) {
  let safe = true;
  const buffer = SHIELD_WIDTH + SHIELD_BUFFER;
  const baseRadius = cell.mapEnergyToRadius() + buffer;

  game.entityIterator((entity) => {
    if (! safe) return;

    if (entity.type === 'cell') {
      const collide = circleCollide(cell.x, cell.y, baseRadius, entity.x, entity.y, entity.mapEnergyToRadius() + buffer);
      if (collide) safe = false;
    }
  });

  return safe;
}

export function spawn(x, y, team, game) {
  const cell = new Cell(x, y, team);

  if (! isSafe(cell, game)) return;
  game.addEntity(cell);
}

export function update(game) {
  if (game.mouseManager.hits.length) {
    const hit = game.mouseManager.hits[0];
    spawn(hit.x, hit.y, 1, game);
  }
}
