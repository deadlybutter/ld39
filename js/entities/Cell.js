export const BASE_ENERGY = 30;
const CIRCUMEFRENCE_POINTS = 32;
const OFFSET_TURNS = 50;
const HIGHLIGHT_COLOR = '#FFDC00';

import Entity from '../core/Entity';
import Shield, { SHIELD_WIDTH, SHIELD_BUFFER } from './Shield';
import Proton from './Proton';
import {
  mapTeamToFillColor,
  mapTeamToBorderColor,
  clamp,
  getRandomVelocity,
  getRandomInt,
} from '../helpers';

class Cell extends Entity {
  constructor(x, y, team) {
    super(x, y, 'cell');

    this.energy = BASE_ENERGY;
    this.setTeam(team);

    this.targets = {};
    this.shieldId = null;
    this.upgrades = [];

    this.rateOfFire = {
      index: 50,
      rate: 50,
    };

    this.energyPerShot = 0.1;

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

  toggleTarget(targetId) {
    this.targets[targetId] = typeof this.targets[targetId] === 'undefined' ? true : !this.targets[targetId];
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

  getPointOffsetRange() {
    return this.mapEnergyToRadius() * .05;
  }

  getOuterRadius() {
    const buffer = SHIELD_WIDTH + SHIELD_BUFFER;
    return this.mapEnergyToRadius() + buffer;
  }

  updateDrawPoints() {
    const dimensions = ['x', 'y'];

    for (let index = 0; index < this.drawPoints.length; index++) {
      const point = this.drawPoints[index];

      for (const d of dimensions) {
        const velocity = point.velocity[d] * (point.turns[d] / (OFFSET_TURNS * 10));
        const range = this.getPointOffsetRange();
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
    if (this.shieldId === null) {
      const shield = new Shield(this.x, this.y, this);
      game.addEntity(shield);
      this.shieldId = shield.id;
    }

    // check energy level
    //  if energy level <= "10" or something
    //   nuke it

    // check collide with other cells
    //  if collided
    //    nuke it

    const hits = game.mouseManager.hits;
    const isHighlighted = game.highlightedCell === this.id;

    if (hits.length) {
      if (hits.includes(this.id)) {
        if (game.highlightedCell === null) game.setHighlightedCell(this.id);
        else if (isHighlighted) game.setHighlightedCell(null);
      }
      else if (isHighlighted) {
        for (const hitId of hits) {

          const entity = game.entities[hitId];
          if (entity.type === 'cell') {
            this.toggleTarget(entity.id);
            game.setHighlightedCell(null);
          }
        }
      }
    }

    if (Object.keys(this.targets).length) {
      if (this.rateOfFire.index >= this.rateOfFire.rate) {
        this.rateOfFire.index = 0;

        for (const targetId of Object.keys(this.targets)) {
          if (! this.targets[targetId]) continue;

          const proton = new Proton(this.x, this.y, this.team, targetId, this.energyPerShot);
          game.addEntity(proton);
          this.subtractEnergy(this.energyPerShot)
        }
      }

      this.rateOfFire.index++;
    }
  }

  draw(ctx, game) {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = game.highlightedCell === this.id ? HIGHLIGHT_COLOR : this.borderColor;
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
