import { guid } from '../helpers';

class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.id = guid();
  }

  update(game) {
    return;
  }

  draw(ctx) {
    return;
  }
}

export default Entity;
