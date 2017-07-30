export const SHIELD_WIDTH = 10;
export const SHIELD_BUFFER = 20;

import Entity from '../core/Entity';
import {
  mapTeamToFillColor,
  otherTeam,
  getRandomVelocity,
} from '../helpers';

class Shield extends Entity {
  constructor(x, y, cell) {
    super(x, y, 'shield');
    this.cell = cell;
    this.resetControl();

    this.rumble = { x: 0, y: 0 }; // TODO?
  }

  resetControl() {
    this.control = {
      [this.cell.team]: 1,
      [otherTeam(this.cell.team)]: 0,
    };
  }

  addControl(team, value) {
    const relativeValue = value / (this.cell.energy * .75);

    this.control[team] += relativeValue;
    this.control[otherTeam(team)] -= relativeValue;
  }

  getRadius() {
    const inner = this.cell.mapEnergyToRadius() + SHIELD_BUFFER + (this.cell.getPointOffsetRange() * 2);

    return {
      inner,
      outer: inner + SHIELD_WIDTH,
    };
  }

  update(game) {
    if (this.control[this.cell.team] <= 0) {
      this.cell.setTeam(otherTeam(this.cell.team));
      this.resetControl();
    }
  }

  draw(ctx) {
    ctx.lineWidth = SHIELD_WIDTH;
    const radius = this.getRadius().inner;

    const renderArc = (team, start, end) => {
      const x = this.cell.x + this.rumble.x;
      const y = this.cell.y + this.rumble.y;

      ctx.strokeStyle = mapTeamToFillColor(team);
      ctx.beginPath();
      ctx.arc(x, y, radius, start, end);
      ctx.stroke();
    }

    const team1 = this.cell.team;
    const team1Value = this.control[team1];
    const team1Start = 0;
    const team1End = (360 * team1Value) * (Math.PI / 180);

    renderArc(team1, team1Start, team1End);
    renderArc(otherTeam(team1), team1End, Math.PI * 2);

    this.rumble = { x: 0, y: 0 };
  }
}

export default Shield;
