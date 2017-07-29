/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(1);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParticleManager = __webpack_require__(2);

var _ParticleManager2 = _interopRequireDefault(_ParticleManager);

var _MouseManager = __webpack_require__(7);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _UpdateManager = __webpack_require__(10);

var _UpdateManager2 = _interopRequireDefault(_UpdateManager);

var _RulesManager = __webpack_require__(11);

var _RulesManager2 = _interopRequireDefault(_RulesManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.lastFrame = Date.now();
    this.entities = {};

    this.updateManager = new _UpdateManager2.default();
    this.rulesManager = new _RulesManager2.default();
    this.particleManager = new _ParticleManager2.default();
    this.mouseManager = new _MouseManager2.default(this.canvas);

    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      requestAnimationFrame(this.draw);
    }
  }, {
    key: 'entityIterator',
    value: function entityIterator(cb) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.entities)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          cb(this.entities[key]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.rulesManager.update(this);
      this.updateManager.update(this);
    }
  }, {
    key: 'addEntity',
    value: function addEntity(entity) {
      this.entities[entity.id] = entity;
    }
  }, {
    key: 'killEntity',
    value: function killEntity(id) {
      delete this.entities[id];
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ctx = this.ctx;

      // Collect frame data to calculate delta
      // const now = Date.now();
      // const delta = now - this.lastFrame;

      this.update(this);

      // Save blank context
      ctx.save();

      // Clear screen
      ctx.fillStyle = '#FFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render
      this.entityIterator(function (entity) {
        return entity.draw(ctx);
      });
      this.particleManager.draw(ctx);

      // Restore context to blank state
      ctx.restore();

      // Update frame data to calculate next delta
      this.lastFrame = Date.now();
      requestAnimationFrame(this.draw);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Particle = __webpack_require__(3);

var _Particle2 = _interopRequireDefault(_Particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INIT_PARTICLES = 10000;

var ParticleManager = function () {
  function ParticleManager() {
    _classCallCheck(this, ParticleManager);

    this.particles = []; // Array of particle objects.
    this.freeStack = []; // Array of indexes pointing at free particles in `this.particles`.
    this.reference = {}; // Reference object for particle id's.

    // Generate object pool.
    for (var index = 0; index < INIT_PARTICLES; index++) {
      var particle = this.makeParticle(0, 0, 0);
      this.setFree(particle.id);
    }
  }

  _createClass(ParticleManager, [{
    key: 'particleIterator',
    value: function particleIterator(cb) {
      for (var i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i];
        if (particle.isAlive) cb(particle);
      }
    }
  }, {
    key: 'getFree',
    value: function getFree() {
      // If there are no free particles, make a new one
      if (!this.freeStack.length) {
        var particle = new _Particle2.default(0, 0, 1000);
        var index = this.particles.push(particle) - 1;
        this.reference[particle.id] = index;

        return particle;
      }

      // Otherwise pick a particle from the stack.
      var freeIndex = this.freeStack.pop();
      return this.particles[freeIndex];
    }
  }, {
    key: 'makeParticle',
    value: function makeParticle(x, y, lifespan, type) {
      var particle = this.getFree();

      particle.x = x;
      particle.y = y;
      particle.lifespan = lifespan;
      particle.type = type;
      particle.reset();

      return particle;
    }
  }, {
    key: 'setFree',
    value: function setFree(id) {
      var index = this.reference[id];
      var particle = this.particles[index];
      particle.isAlive = false;

      this.freeStack.push(index);
    }
  }, {
    key: 'update',
    value: function update(game) {
      this.particleIterator(function (particle) {
        return particle.update(game);
      });
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      this.particleIterator(function (particle) {
        return particle.draw(ctx);
      });
    }
  }]);

  return ParticleManager;
}();

exports.default = ParticleManager;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(4);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Test = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PARTICLE_MAP = {
  'test': {
    update: _Test.update,
    draw: _Test.draw
  }
};

var Particle = function (_Entity) {
  _inherits(Particle, _Entity);

  function Particle(x, y, lifespan, type) {
    _classCallCheck(this, Particle);

    var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, x, y, 'particle'));

    _this.lifespan = lifespan;
    _this.type = type;

    _this.reset();
    return _this;
  }

  _createClass(Particle, [{
    key: 'reset',
    value: function reset() {
      this.born = Date.now();
      this.death = Date.now() + this.lifespan;

      this.isAlive = this.born < this.death;
    }
  }, {
    key: 'update',
    value: function update(game) {
      if (this.isAlive && this.death < Date.now()) {
        game.particleManager.setFree(this.id);
        return;
      }

      PARTICLE_MAP[this.type].update.apply(this, [game]);
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      PARTICLE_MAP[this.type].draw.apply(this, [ctx]);
    }
  }]);

  return Particle;
}(_Entity3.default);

exports.default = Particle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {
  function Entity(x, y, type) {
    _classCallCheck(this, Entity);

    this.x = x;
    this.y = y;
    this.type = type;

    this.id = (0, _helpers.guid)();
  }

  _createClass(Entity, [{
    key: 'update',
    value: function update(game) {
      return;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      return;
    }
  }]);

  return Entity;
}();

exports.default = Entity;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guid = guid;
exports.mapTeamToFillColor = mapTeamToFillColor;
exports.mapTeamToBorderColor = mapTeamToBorderColor;
exports.clamp = clamp;
exports.getRandomInt = getRandomInt;
exports.getRandomVelocity = getRandomVelocity;
exports.otherTeam = otherTeam;
exports.mag = mag;
exports.normalize = normalize;
exports.circleCollide = circleCollide;
// Generate a random GUID.
// @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
//
// @return String
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function mapTeamToFillColor(team) {
  return parseInt(team) === 1 ? '#0074D9' : '#111';
}

function mapTeamToBorderColor(team) {
  return parseInt(team) === 1 ? '#7FDBFF' : '#01FF70';
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVelocity() {
  return { x: getRandomInt(-1, 1), y: getRandomInt(-1, 1) };
}

function otherTeam(team) {
  return parseInt(team) === 1 ? 2 : 1;
}

function mag(vec) {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

function normalize(vec) {
  var m = mag(vec);
  return { x: vec.x / m, y: vec.y / m };
}

function circleCollide(x1, y1, r1, x2, y2, r2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var distance = Math.sqrt(dx * dx + dy * dy);
  return distance < r1 + r2;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.draw = draw;
function update(game) {
  this.x += 0.1;
  this.y += 0.1;
}

function draw(ctx) {
  ctx.fillStyle = '#111';
  ctx.fillRect(this.x, this.y, 10, 10);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MouseManager = function () {
  function MouseManager(canvas) {
    var _this = this;

    _classCallCheck(this, MouseManager);

    this.canvas = canvas;
    this.reset();

    canvas.addEventListener('click', function (e) {
      var x = e.offsetX;
      var y = e.offsetY;
      _this.hits.push({ x: x, y: y });
    });
  }

  _createClass(MouseManager, [{
    key: 'reset',
    value: function reset() {
      this.clicks = [];
      this.hits = [];
    }
  }, {
    key: 'update',
    value: function update(game) {
      // go through clicks and check for any hits
      //
    }
  }]);

  return MouseManager;
}();

exports.default = MouseManager;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(4);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Shield = __webpack_require__(9);

var _Shield2 = _interopRequireDefault(_Shield);

var _helpers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_ENERGY = 30;
var CIRCUMEFRENCE_POINTS = 32;
var OFFSET_TURNS = 50;

var Cell = function (_Entity) {
  _inherits(Cell, _Entity);

  function Cell(x, y, team) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, x, y, 'cell'));

    _this.energy = BASE_ENERGY;
    _this.setTeam(team);

    _this.targets = [];
    _this.hasShield = false;
    _this.upgrades = [];

    _this.drawPoints = [];
    for (var pointIndex = 0; pointIndex < CIRCUMEFRENCE_POINTS; pointIndex++) {
      _this.drawPoints.push({
        velocity: (0, _helpers.getRandomVelocity)(),
        offset: { x: 0, y: 0 },
        turns: { x: 0, y: 0 }
      });
    }
    return _this;
  }

  _createClass(Cell, [{
    key: 'setTeam',
    value: function setTeam(team) {
      this.team = team;
      this.fillColor = (0, _helpers.mapTeamToFillColor)(team);
      this.borderColor = (0, _helpers.mapTeamToBorderColor)(team);
    }
  }, {
    key: 'addTarget',
    value: function addTarget(target) {
      this.targets.push(target);
    }
  }, {
    key: 'applyUpgrade',
    value: function applyUpgrade(upgrade) {
      this.upgrades.push(upgrade);
    }
  }, {
    key: 'addEnergy',
    value: function addEnergy(amount) {
      this.energy += amount;
    }
  }, {
    key: 'subtractEnergy',
    value: function subtractEnergy(amount) {
      this.energy -= amount;
    }
  }, {
    key: 'mapEnergyToRadius',
    value: function mapEnergyToRadius() {
      return this.energy;
    }
  }, {
    key: 'getPointOffsetRange',
    value: function getPointOffsetRange() {
      return this.mapEnergyToRadius() * .05;
    }
  }, {
    key: 'updateDrawPoints',
    value: function updateDrawPoints() {
      var dimensions = ['x', 'y'];

      for (var index = 0; index < this.drawPoints.length; index++) {
        var point = this.drawPoints[index];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = dimensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var d = _step.value;

            var velocity = point.velocity[d] * (point.turns[d] / (OFFSET_TURNS * 10));
            var range = this.getPointOffsetRange();
            this.drawPoints[index].offset[d] = (0, _helpers.clamp)(point.offset[d] + velocity, -range, range);
            this.drawPoints[index].turns[d]++;

            if (point.turns[d] >= OFFSET_TURNS) {
              this.drawPoints[index].velocity[d] = (0, _helpers.getRandomInt)(-1, 1);
              this.drawPoints[index].turns[d] = 0;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'update',
    value: function update(game) {
      if (!this.hasShield) {
        game.addEntity(new _Shield2.default(this.x, this.y, this));
        this.hasShield = true;
      }

      // check energy level
      //  if energy level <= "20" or something
      //    break the cell into particles, target closest friendly cells
      //    if none, game over

      // check if mouse click occured
      //  either check if this cell was clicked
      //  or if its highlighted already, apply the target

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          // check if target exists in game world
          //  fire proton
          //  deduct energy

          var target = _step2.value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var _this2 = this;

      ctx.fillStyle = this.fillColor;
      ctx.strokeStyle = this.borderColor;
      ctx.lineWidth = this.mapEnergyToRadius() / 6;

      this.updateDrawPoints();

      ctx.beginPath();

      var getPointPosition = function getPointPosition(index) {
        var offset = _this2.drawPoints[index].offset;


        var radius = _this2.mapEnergyToRadius();
        var radian = 2 * Math.PI * index / CIRCUMEFRENCE_POINTS;

        var px = _this2.x + radius * Math.cos(radian) + offset.x;
        var py = _this2.y + radius * Math.sin(radian) + offset.y;

        return { px: px, py: py };
      };

      for (var index = 0; index < CIRCUMEFRENCE_POINTS; index++) {
        var _getPointPosition = getPointPosition(index),
            px = _getPointPosition.px,
            py = _getPointPosition.py;

        index === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);

        // Close the circle
        if (index === CIRCUMEFRENCE_POINTS - 1) {
          var start = getPointPosition(0);
          ctx.lineTo(start.px, start.py);
        }
      }

      ctx.stroke();
      ctx.fill();
    }
  }]);

  return Cell;
}(_Entity3.default);

exports.default = Cell;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHIELD_BUFFER = exports.SHIELD_WIDTH = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(4);

var _Entity3 = _interopRequireDefault(_Entity2);

var _helpers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHIELD_WIDTH = exports.SHIELD_WIDTH = 10;
var SHIELD_BUFFER = exports.SHIELD_BUFFER = 20;

var Shield = function (_Entity) {
  _inherits(Shield, _Entity);

  function Shield(x, y, cell) {
    _classCallCheck(this, Shield);

    var _this = _possibleConstructorReturn(this, (Shield.__proto__ || Object.getPrototypeOf(Shield)).call(this, x, y, 'shield'));

    _this.cell = cell;
    _this.resetControl();

    _this.rumble = { x: 0, y: 0 };
    return _this;
  }

  _createClass(Shield, [{
    key: 'resetControl',
    value: function resetControl() {
      var _control;

      this.control = (_control = {}, _defineProperty(_control, this.cell.team, 1), _defineProperty(_control, (0, _helpers.otherTeam)(this.cell.team), 0), _control);
    }
  }, {
    key: 'addControl',
    value: function addControl(team, value) {
      var relativeValue = value / (this.cell.energy * .75);

      this.control[team] += relativeValue;
      this.control[(0, _helpers.otherTeam)(team)] -= relativeValue;
    }
  }, {
    key: 'rumble',
    value: function rumble() {
      this.rumble = (0, _helpers.getRandomVelocity)();
    }
  }, {
    key: 'getRadius',
    value: function getRadius() {
      var inner = this.cell.mapEnergyToRadius() + SHIELD_BUFFER + this.cell.getPointOffsetRange() * 2;

      return {
        inner: inner,
        outer: inner + SHIELD_WIDTH
      };
    }
  }, {
    key: 'update',
    value: function update(game) {
      if (this.control[this.cell.team] <= 0) {
        this.cell.setTeam((0, _helpers.otherTeam)(this.cell.team));
        this.resetControl();
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var _this2 = this;

      ctx.lineWidth = SHIELD_WIDTH;
      var radius = this.getRadius().inner;

      var renderArc = function renderArc(team, start, end) {
        var x = _this2.cell.x + _this2.rumble.x;
        var y = _this2.cell.y + _this2.rumble.y;

        ctx.strokeStyle = (0, _helpers.mapTeamToFillColor)(team);
        ctx.beginPath();
        ctx.arc(x, y, radius, start, end);
        ctx.stroke();
      };

      var team1 = this.cell.team;
      var team1Value = this.control[team1];
      var team1Start = 0;
      var team1End = 360 * team1Value * (Math.PI / 180);

      renderArc(team1, team1Start, team1End);
      renderArc((0, _helpers.otherTeam)(team1), team1End, Math.PI * 2);

      this.rumble = { x: 0, y: 0 };
    }
  }]);

  return Shield;
}(_Entity3.default);

exports.default = Shield;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODE_END = exports.MODE_PLAY = exports.MODE_SETUP = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CellSpawnHelper = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MODE_SETUP = exports.MODE_SETUP = 'MODE_SETUP';
var MODE_PLAY = exports.MODE_PLAY = 'MODE_PLAY';
var MODE_END = exports.MODE_END = 'MODE_END';

var UpdateManager = function () {
  function UpdateManager() {
    _classCallCheck(this, UpdateManager);

    this.mode = MODE_SETUP;
  }

  _createClass(UpdateManager, [{
    key: 'changeMode',
    value: function changeMode(mode) {
      this.mode = mode;
    }
  }, {
    key: 'setupUpdate',
    value: function setupUpdate(game) {
      game.mouseManager.update(game);
      (0, _CellSpawnHelper.update)(game);
      game.mouseManager.reset();
      game.entityIterator(function (entity) {
        return entity.update(game);
      });
    }
  }, {
    key: 'playUpdate',
    value: function playUpdate(game) {
      game.mouseManager.update(game);
      game.entityIterator(function (entity) {
        return entity.update(game);
      });
      game.particleManager.update(game);
      game.mouseManager.reset();
    }
  }, {
    key: 'endUpdate',
    value: function endUpdate(game) {}
  }, {
    key: 'update',
    value: function update(game) {
      switch (this.mode) {
        case MODE_SETUP:
          this.setupUpdate(game);break;
        case MODE_PLAY:
          this.playUpdate(game);break;
        case MODE_END:
          this.endUpdate(game);break;
      }
    }
  }]);

  return UpdateManager;
}();

exports.default = UpdateManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SPAWN_CELLS_PER_PLAYER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpdateManager = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SPAWN_CELLS_PER_PLAYER = exports.SPAWN_CELLS_PER_PLAYER = 4;

var RulesManager = function () {
  function RulesManager() {
    _classCallCheck(this, RulesManager);
  }

  _createClass(RulesManager, [{
    key: 'update',
    value: function update(game) {
      var currentMode = game.updateManager.mode;

      // Rule: Initiate play when both sides place all their cells down
      if (currentMode === _UpdateManager.MODE_SETUP) {
        var totalCells = 0;

        game.entityIterator(function (e) {
          if (e.type === 'cell' && e.team === 1) totalCells++;
        });

        if (totalCells >= SPAWN_CELLS_PER_PLAYER) {
          // TODO: Tell AI to spawn.
          game.updateManager.changeMode(_UpdateManager.MODE_PLAY);
        }
      }
      // end rule //
    }
  }]);

  return RulesManager;
}();

exports.default = RulesManager;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafe = isSafe;
exports.spawn = spawn;
exports.update = update;

var _Cell = __webpack_require__(8);

var _Cell2 = _interopRequireDefault(_Cell);

var _Shield = __webpack_require__(9);

var _helpers = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSafe(cell, game) {
  var safe = true;
  var buffer = _Shield.SHIELD_WIDTH + _Shield.SHIELD_BUFFER;
  var baseRadius = cell.mapEnergyToRadius() + buffer;

  game.entityIterator(function (entity) {
    if (!safe) return;

    if (entity.type === 'cell') {
      var collide = (0, _helpers.circleCollide)(cell.x, cell.y, baseRadius, entity.x, entity.y, entity.mapEnergyToRadius() + buffer);
      if (collide) safe = false;
    }
  });

  return safe;
}

function spawn(x, y, team, game) {
  var cell = new _Cell2.default(x, y, team);

  if (!isSafe(cell, game)) return;
  game.addEntity(cell);
}

function update(game) {
  if (game.mouseManager.hits.length) {
    var hit = game.mouseManager.hits[0];
    spawn(hit.x, hit.y, 1, game);
  }
}

/***/ })
/******/ ]);