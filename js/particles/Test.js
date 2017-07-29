export function update({ delta, game }) {
  this.x += 0.1 * delta;
  this.y += 0.1 * delta;
}

export function draw({ ctx }) {
  ctx.fillStyle = '#111';
  ctx.fillRect(this.x, this.y, 10, 10);
}
