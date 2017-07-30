import Entity from './Entity';

class Particle extends Entity {
  constructor(x, y, lifespan) {
    super(x, y, 'particle');

    this.direction = { x: 0, y: 0 };
    this.lifespan = lifespan;
    this.color = '#FFF';
    this.speed = 0;

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

    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export default Particle;
