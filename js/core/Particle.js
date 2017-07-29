import Entity from './Entity';

import {
  update as testUpdate,
  draw as testDraw,
} from '../particles/Test';

const PARTICLE_MAP = {
  'test': {
    update: testUpdate,
    draw: testDraw,
  },
};

class Particle extends Entity {
  constructor(x, y, lifespan, type) {
    super(x, y, 'particle');
    this.lifespan = lifespan;
    this.type = type;

    this.reset();
  }

  reset() {
    this.born = Date.now();
    this.death = Date.now() + this.lifespan;

    this.isAlive = this.born < this.death;
  }

  update(game) {
    if (this.isAlive && this.death < Date.now()) {
      game.particleManager.setFree(this.id);
      return;
    }

    PARTICLE_MAP[this.type].update.apply(this, [game]);
  }

  draw(ctx) {
    PARTICLE_MAP[this.type].draw.apply(this, [ctx]);
  }
}

export default Particle;
