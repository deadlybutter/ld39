const SPEED = .4;
const LENGTH = 2;

import Entity from '../core/Entity';
import Particle from '../core/Particle';
import {
  normalize,
  mapTeamToFillColor,
  mapTeamToBorderColor,
  pointCircleCollide,
  otherTeam,
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
      if (target.team !== this.team) {
        game.entities[target.shieldId].addControl(this.team, this.energy);
      }
      else {
        target.addEnergy(this.energy);
      }

      const particles = game.particleManager.makeMany(this.x, this.y, 500, 10);
      game.particleManager.applyEffects(particles, 'color', mapTeamToBorderColor(target.team));
      game.particleManager.applyEffects(particles, 'speed', 0.5);
      game.particleManager.applyRangedVelocity(particles, { x: direction.x * -1, y: direction.y * -1 });

      game.killEntity(this.id);
    }
  }

  draw(ctx) {
    ctx.fillStyle = mapTeamToFillColor(this.team);
    ctx.fillRect(this.x, this.y, LENGTH, LENGTH);
  }
}

export default Proton;
