const SHIELD_WIDTH = 10;
const SHIELD_BUFFER = 20;

import Entity from '../core/Entity';
import {
  mapTeamToFillColor,
  otherTeam,
} from '../helpers';

class Shield extends Entity {
  constructor(x, y, cell) {
    super(x, y);
    this.cell = cell;

    this.control = {
      [cell.team]: 100,
      [otherTeam(cell.team)]: 0,
    };
  }

  update(game) {

  }

  draw(ctx) {
    ctx.lineWidth = SHIELD_WIDTH;
    const radius = this.cell.mapEnergyToRadius() + SHIELD_BUFFER + (this.cell.getPointOffsetRange() * 2);

    for (const team of Object.keys(this.control)) {
      const val = this.control[team];
      if (val === 0) continue;

      ctx.strokeStyle = mapTeamToFillColor(team);
      ctx.beginPath();
      ctx.arc(this.cell.x, this.cell.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }
}

export default Shield;

//  if shield control === 0
//    flip team
//    rebuild shield
//    check if other friendly game cells exist, if not, end game
