import { guid } from '../helpers';

class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;

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
