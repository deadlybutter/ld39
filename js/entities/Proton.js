const SPEED = .4;
const LENGTH = 2;

import Entity from '../core/Entity';
import {
  normalize,
  mapTeamToFillColor,
  pointCircleCollide,
} from '../helpers';

class Proton extends Entity {
  constructor(x, y, team, targetId, energy) {
    super(x, y, 'proton');

    this.team = team;
    this.targetId = targetId;
    this.energy = energy;
  }

  update(game) {
    const target = game.entities[this.targetId];
    if (! target) {
      game.killEntity(this.id);
      return;
    }

    const dx = target.x - this.x;
    const dy = target.y - this.y;
    const direction = normalize({ x: dx, y: dy });

    this.x += direction.x * SPEED;
    this.y += direction.y * SPEED;

    if (pointCircleCollide(this.x, this.y, target.x, target.y, target.getOuterRadius())) {
      if (target.team === this.team) target.addEnergy(this.energy);
      else {
        game.entities[target.shieldId].addControl(this.team, this.energy);
      }

      game.killEntity(this.id);
      // TODO: Spawn particles
    }
  }

  draw(ctx) {
    ctx.fillStyle = mapTeamToFillColor(this.team);
    ctx.fillRect(this.x, this.y, LENGTH, LENGTH);
  }
}

export default Proton;
