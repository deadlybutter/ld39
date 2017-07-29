import Game from './core/Game';

const game = new Game();
window.startGame = game.start;

// import Cell from './entities/Cell';
// import Proton from './entities/Proton';
// const test = new Cell(10, 10, 1);
// game.addEntity(test);
//
// const testProton = new Proton(500, 440, 1, test);
// game.addEntity(testProton);

// setInterval(() => {
//   test.addEnergy(.2);
// }, 500);

// setInterval(() => {
//   for (var i = 0; i < 20; i++) {
//     game.particleManager.makeParticle(Math.random() * 100, Math.random() * 100, 1000 + (Math.random() * 2000), 'test');
//   }
//
//   // console.log(game.particleManager.particles.length);
// }, 500);
