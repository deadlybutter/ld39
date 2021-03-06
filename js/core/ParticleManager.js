const INIT_PARTICLES = 10000;

import Particle from './Particle';
import { normalize, getRandomNum } from '../helpers';

class ParticleManager {
  constructor() {
    this.particles = []; // Array of particle objects.
    this.freeStack = []; // Array of indexes pointing at free particles in `this.particles`.
    this.reference = {}; // Reference object for particle id's.

    // Generate object pool.
    for (let index = 0; index < INIT_PARTICLES; index++) {
      const particle = this.makeParticle(0, 0, 0);
      this.setFree(particle.id);
    }
  }

  particleIterator(cb) {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      if (particle.isAlive) cb(particle);
    }
  }

  getFree() {
    // If there are no free particles, make a new one
    if (! this.freeStack.length) {
      const particle = new Particle(0, 0);
      const index = this.particles.push(particle) - 1;
      this.reference[particle.id] = index;

      return particle;
    }

    // Otherwise pick a particle from the stack.
    const freeIndex = this.freeStack.pop();
    return this.particles[freeIndex];
  }

  makeParticle(x, y, lifespan) {
    const particle = this.getFree();

    particle.x = x;
    particle.y = y;
    particle.lifespan = lifespan;
    particle.reset();

    return particle;
  }

  makeMany(x, y, lifespan, total) {
    const particles = [];

    for (let index = 0; index < total; index++) {
      particles.push(this.makeParticle(x, y, lifespan));
    }

    return particles;
  }

  applyEffects(particles, key, value) {
    for (const particle of particles) {
      particle[key] = value;
    }
  }

  applyRangedVelocity(particles, direction) {
    for (const particle of particles) {
      const newDir = {
        x: direction.x + getRandomNum(-1, 1),
        y: direction.y + getRandomNum(-1, 1),
      };

      particle.direction = normalize(newDir);
    }
  }

  setFree(id) {
    const index = this.reference[id];
    const particle = this.particles[index];
    particle.isAlive = false;

    this.freeStack.push(index);
  }

  update(game) {
    this.particleIterator(particle => particle.update(game));
  }

  draw(ctx) {
    this.particleIterator(particle => particle.draw(ctx));
  }
}

export default ParticleManager;
