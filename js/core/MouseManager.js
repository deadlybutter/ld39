class MouseManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();

    canvas.addEventListener('click', (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      this.hits.push({ x, y });
    });
  }

  reset() {
    this.clicks = [];
    this.hits = [];
  }

  update(game) {
    // go through clicks and check for any hits
    //
  }
}

export default MouseManager;
