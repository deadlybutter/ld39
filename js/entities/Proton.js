const SPEED = .4;
const RADIUS = 2;

import Entity from '../core/Entity';
import { normalize, mapTeamToFillColor } from '../helpers';

class Proton extends Entity {
  constructor(x, y, team, target) {
    super(x, y, 'proton');

    this.team = team;
    this.target = target;

    this.direction = normalize({ x: target.x - x, y: target.y - y });
  }

  update(game) {
    this.x += this.direction.x * SPEED;
    this.y += this.direction.y * SPEED;
  }

  draw(ctx) {
    ctx.fillStyle = mapTeamToFillColor(this.team);
    ctx.arc(this.x, this.y, RADIUS, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Proton;
