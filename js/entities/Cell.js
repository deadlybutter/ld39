const BASE_ENERGY = 30;
const CIRCUMEFRENCE_POINTS = 32;
const OFFSET_TURNS = 50;

import Entity from '../core/Entity';
import {
  mapTeamToFillColor,
  mapTeamToBorderColor,
  clamp,
  getRandomVelocity,
  getRandomInt,
} from '../helpers';

class Cell extends Entity {
  constructor(x, y, team) {
    super(x, y);

    this.energy = BASE_ENERGY;
    this.setTeam(team);

    this.targets = [];
    this.shield = null;
    this.upgrades = [];

    this.drawPoints = [];
    for (let pointIndex = 0; pointIndex < CIRCUMEFRENCE_POINTS; pointIndex++) {
      this.drawPoints.push({
        velocity: getRandomVelocity(),
        offset: { x: 0, y: 0 },
        turns: { x: 0, y: 0 },
      });
    }
  }

  setTeam(team) {
    this.team = team;
    this.fillColor = mapTeamToFillColor(team);
    this.borderColor = mapTeamToBorderColor(team);
  }

  addTarget(target) {
    this.targets.push(target);
  }

  applyUpgrade(upgrade) {
    this.upgrades.push(upgrade);
  }

  addEnergy(amount) {
    this.energy += amount;
  }

  subtractEnergy(amount) {
    this.energy -= amount;
  }

  mapEnergyToRadius() {
    return this.energy;
  }

  updateDrawPoints() {
    const dimensions = ['x', 'y'];

    for (let index = 0; index < this.drawPoints.length; index++) {
      const point = this.drawPoints[index];

      for (const d of dimensions) {
        const velocity = point.velocity[d] * (point.turns[d] / (OFFSET_TURNS * 10));
        const range = this.mapEnergyToRadius() * .05;
        this.drawPoints[index].offset[d] = clamp(point.offset[d] + velocity, -range, range);
        this.drawPoints[index].turns[d]++;

        if (point.turns[d] >= OFFSET_TURNS) {
          this.drawPoints[index].velocity[d] = getRandomInt(-1, 1);
          this.drawPoints[index].turns[d] = 0;
        }
      }
    }
  }

  update(game) {
    // check shield
    //  if shield === null, make one
    //  if shield control === 0
    //    flip team
    //    rebuild shield
    //    check if other friendly game cells exist, if not, end game

    // check energy level
    //  if energy level <= "20" or something
    //    break the cell into particles, target closest friendly cells
    //    if none, game over

    // check if mouse click occured
    //  either check if this cell was clicked
    //  or if its highlighted already, apply the target

    for (const target of this.targets) {
      // check if target exists in game world
      //  fire proton
      //  deduct energy
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.mapEnergyToRadius() / 6;

    this.updateDrawPoints();

    ctx.beginPath();

    const getPointPosition = (index) => {
      const { offset } = this.drawPoints[index];

      const radius = this.mapEnergyToRadius();
      const radian = 2 * Math.PI * index / CIRCUMEFRENCE_POINTS;

      const px = (this.x + (radius * Math.cos(radian))) + offset.x;
      const py = this.y + (radius * Math.sin(radian)) + offset.y;

      return { px, py };
    }

    for (let index = 0; index < CIRCUMEFRENCE_POINTS; index++) {
      const { px, py } = getPointPosition(index);

      index === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);

      // Close the circle
      if (index === CIRCUMEFRENCE_POINTS - 1) {
        const start = getPointPosition(0);
        ctx.lineTo(start.px, start.py);
      }
    }

    ctx.stroke();
    ctx.fill();
  }
}

export default Cell;
