import Cell from '../entities/Cell';
import { SHIELD_WIDTH, SHIELD_BUFFER } from '../entities/Shield';
import { circleCollide } from '../helpers';

export function isSafe(cell, game) {
  let safe = true;

  game.entityIterator((entity) => {
    if (! safe) return;

    if (entity.type === 'cell') {
      const collide = circleCollide(cell.x, cell.y, cell.getOuterRadius(), entity.x, entity.y, entity.getOuterRadius());
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
  if (game.mouseManager.clicks.length) {
    const click = game.mouseManager.clicks[0];
    spawn(click.x, click.y, 1, game);
  }
}
