export function update(game) {
  this.x += 0.1;
  this.y += 0.1;
}

export function draw(ctx) {
  ctx.fillStyle = '#111';
  ctx.fillRect(this.x, this.y, 10, 10);
}
