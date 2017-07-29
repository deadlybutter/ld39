import Game from './core/Game';

const game = new Game();
window.startGame = game.start;

// setInterval(() => {
//   for (var i = 0; i < 200; i++) {
//     game.particleManager.makeParticle(Math.random() * 100, Math.random() * 100, Math.random() * 1000, 'test');
//   }
//
//   console.log(game.particleManager.particles.length);
// }, 100);
