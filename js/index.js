import Game from './core/Game';

const game = new Game();
window.startGame = game.start;

import Cell from './entities/Cell';
const test = new Cell(200, 200, 1);
game.addEntity(test);

setInterval(() => {
  test.addEnergy(.2);
}, 500);

// setInterval(() => {
//   for (var i = 0; i < 20; i++) {
//     game.particleManager.makeParticle(Math.random() * 100, Math.random() * 100, 1000 + (Math.random() * 2000), 'test');
//   }
//
//   // console.log(game.particleManager.particles.length);
// }, 500);
