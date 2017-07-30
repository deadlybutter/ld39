import { pointCircleCollide } from '../helpers';

class MouseManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();

    canvas.addEventListener('click', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      this.clicks.push({ x, y });
    });
  }

  reset() {
    this.clicks = [];
    this.hits = [];
  }

  update(game) {
    game.entityIterator((entity) => {
      if (entity.type === 'cell') {
        this.clicks.forEach(point => {
          const intersects = pointCircleCollide(point.x, point.y, entity.x, entity.y, entity.mapEnergyToRadius());
          if (intersects) this.hits.push(entity.id);
        });
      }
    });
  }
}

export default MouseManager;
