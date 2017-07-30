import ParticleManager from './ParticleManager';
import MouseManager from './MouseManager';
import UpdateManager from './UpdateManager';
import RulesManager from './RulesManager';
import BotManager from './BotManager';

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.lastFrame = Date.now();
    this.entities = {};

    this.updateManager = new UpdateManager();
    this.rulesManager = new RulesManager();
    this.particleManager = new ParticleManager();
    this.mouseManager = new MouseManager(this.canvas);
    this.botManager = new BotManager();

    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);

    this.highlightedCell = null;
    this.nextHighlight = {
      shouldUpdate: false,
      value: null,
    };
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
    this.rulesManager.update(this);
    this.updateManager.update(this);
  }

  addEntity(entity) {
    this.entities[entity.id] = entity;
  }

  killEntity(id) {
    delete this.entities[id];
  }

  setHighlightedCell(id) {
    this.nextHighlight = {
      shouldUpdate: true,
      value: id,
    };
  }

  updateHighlight() {
    if (! this.nextHighlight.shouldUpdate) return;

    this.highlightedCell = this.nextHighlight.value;
    this.nextHighlight.shouldUpdate = false;
  }

  draw() {
    const { ctx } = this;

    // Collect frame data to calculate delta
    // const now = Date.now();
    // const delta = now - this.lastFrame;
    this.update(this);

    // Save blank context
    ctx.save();

    // Clear screen
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render
    this.entityIterator(entity => entity.draw(ctx, this));
    this.particleManager.draw(ctx, this);

    // Restore context to blank state
    ctx.restore();

    // Update frame data to calculate next delta
    this.lastFrame = Date.now();
    requestAnimationFrame(this.draw);
  }
}

export default Game;
