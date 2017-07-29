import ParticleManager from './ParticleManager';

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.lastFrame = Date.now();
    this.entities = {};

    this.particleManager = new ParticleManager();

    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);
  }

  start() {
    requestAnimationFrame(this.draw);
  }

  entityIterator(cb) {
    for (const key of Object.keys(this.entities)) {
      cb(this.entities[key]);
    }
  }

  update(delta) {
    const props = { delta, game: this };

    this.entityIterator(entity => entity.update(props));
    this.particleManager.update(props);
  }

  addEntity(entity) {
    this.entities[entity.id] = entity;
  }

  killEntity(id) {
    delete this.entities[id];
  }

  draw() {
    const { ctx } = this;

    // Collect frame data to calculate delta
    const now = Date.now();
    const delta = now - this.lastFrame;
    this.update(delta);

    // Save blank context
    ctx.save();

    // Clear screen
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render
    const props = { ctx };
    this.entityIterator(entity => entity.draw(props));
    this.particleManager.draw(props);

    // Restore context to blank state
    ctx.restore();

    // Update frame data to calculate next delta
    this.lastFrame = Date.now();
    requestAnimationFrame(this.draw);
  }
}

export default Game;
