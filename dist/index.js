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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
exports.getRandomNum = getRandomNum;
exports.getRandomVelocity = getRandomVelocity;
exports.otherTeam = otherTeam;
exports.mag = mag;
exports.normalize = normalize;
exports.circleCollide = circleCollide;
exports.pointCircleCollide = pointCircleCollide;
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

function getRandomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
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

function pointCircleCollide(x, y, cx, cy, r) {
  var dx = x - cx;
  var dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

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
    value: function draw(ctx, game) {
      return;
    }
  }]);

  return Entity;
}();

exports.default = Entity;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Particle = function (_Entity) {
  _inherits(Particle, _Entity);

  function Particle(x, y, lifespan) {
    _classCallCheck(this, Particle);

    var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, x, y, 'particle'));

    _this.direction = { x: 0, y: 0 };
    _this.lifespan = lifespan;
    _this.color = '#FFF';
    _this.speed = 0;

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

      this.x += this.direction.x * this.speed;
      this.y += this.direction.y * this.speed;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 1, 1);
    }
  }]);

  return Particle;
}(_Entity3.default);

exports.default = Particle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODE_STOP = exports.MODE_END = exports.MODE_PLAY = exports.MODE_SETUP = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CellSpawnHelper = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MODE_SETUP = exports.MODE_SETUP = 'MODE_SETUP';
var MODE_PLAY = exports.MODE_PLAY = 'MODE_PLAY';
var MODE_END = exports.MODE_END = 'MODE_END';
var MODE_STOP = exports.MODE_STOP = 'MODE_STOP';

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
      game.updateHighlight();
      game.mouseManager.update(game);
      game.entityIterator(function (entity) {
        return entity ? entity.update(game) : null;
      });
      game.particleManager.update(game);
      game.mouseManager.reset();
      game.botManager.update(game);
    }
  }, {
    key: 'endUpdate',
    value: function endUpdate(game) {
      alert('Game over!');
      this.changeMode(MODE_STOP);
    }
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafe = isSafe;
exports.spawn = spawn;
exports.update = update;

var _Cell = __webpack_require__(5);

var _Cell2 = _interopRequireDefault(_Cell);

var _Shield = __webpack_require__(6);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSafe(cell, game) {
  var safe = true;

  game.entityIterator(function (entity) {
    if (!safe) return;

    if (entity.type === 'cell') {
      var collide = (0, _helpers.circleCollide)(cell.x, cell.y, cell.getOuterRadius(), entity.x, entity.y, entity.getOuterRadius());
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
  if (game.mouseManager.clicks.length) {
    var click = game.mouseManager.clicks[0];
    spawn(click.x, click.y, 1, game);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASE_ENERGY = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Shield = __webpack_require__(6);

var _Shield2 = _interopRequireDefault(_Shield);

var _Proton = __webpack_require__(11);

var _Proton2 = _interopRequireDefault(_Proton);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_ENERGY = exports.BASE_ENERGY = 30;
var CIRCUMEFRENCE_POINTS = 32;
var OFFSET_TURNS = 50;
var HIGHLIGHT_COLOR = '#FFDC00';

var Cell = function (_Entity) {
  _inherits(Cell, _Entity);

  function Cell(x, y, team) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, x, y, 'cell'));

    _this.energy = BASE_ENERGY;
    _this.setTeam(team);

    _this.targets = {};
    _this.shieldId = null;
    _this.upgrades = [];

    _this.rateOfFire = {
      index: 50,
      rate: 50
    };

    _this.energyPerShot = 0.1;

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
    key: 'toggleTarget',
    value: function toggleTarget(targetId) {
      this.targets[targetId] = typeof this.targets[targetId] === 'undefined' ? true : !this.targets[targetId];
    }
  }, {
    key: 'target',
    value: function target(targetId) {
      this.targets[targetId] = true;
    }
  }, {
    key: 'clearTargets',
    value: function clearTargets() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.targets)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var targetId = _step.value;

          this.targets[targetId] = false;
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
    key: 'getOuterRadius',
    value: function getOuterRadius() {
      var buffer = _Shield.SHIELD_WIDTH + _Shield.SHIELD_BUFFER;
      return this.mapEnergyToRadius() + buffer;
    }
  }, {
    key: 'updateDrawPoints',
    value: function updateDrawPoints() {
      var dimensions = ['x', 'y'];

      for (var index = 0; index < this.drawPoints.length; index++) {
        var point = this.drawPoints[index];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = dimensions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var d = _step2.value;

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
    }
  }, {
    key: 'nuke',
    value: function nuke(game) {
      game.killEntity(this.id);

      var makeNukeParticles = function makeNukeParticles(x, y, total, speed) {
        var particles = game.particleManager.makeMany(x, y, 3500, total);
        game.particleManager.applyEffects(particles, 'color', '#FF851B');
        game.particleManager.applyEffects(particles, 'speed', speed);
        game.particleManager.applyRangedVelocity(particles, { x: 0, y: 0 });
      };

      makeNukeParticles(this.x, this.y, this.energy * 4, 0.4);

      for (var index = 0; index < CIRCUMEFRENCE_POINTS; index++) {
        var _getPointPosition = this.getPointPosition(index),
            px = _getPointPosition.px,
            py = _getPointPosition.py;

        makeNukeParticles(px, py, this.energy * 2, 0.6);
      }

      game.killEntity(this.shieldId);
    }
  }, {
    key: 'update',
    value: function update(game) {
      var _this2 = this;

      if (this.shieldId === null) {
        var shield = new _Shield2.default(this.x, this.y, this);
        game.addEntity(shield);
        this.shieldId = shield.id;
      }

      if (this.energy <= 2) {
        this.nuke(game);
        return;
      }

      var cellCollided = false;
      game.entityIterator(function (entity) {
        if (cellCollided || entity.type !== 'cell' || _this2.id === entity.id) return;
        if ((0, _helpers.circleCollide)(_this2.x, _this2.y, _this2.getOuterRadius() - 2, entity.x, entity.y, entity.getOuterRadius() - 2)) {
          _this2.nuke(game);
          entity.nuke(game);
          cellCollided = true;
        }
      });
      if (cellCollided) return;

      var hits = game.mouseManager.hits;
      var isHighlighted = game.highlightedCell === this.id;

      if (hits.length) {
        if (hits.includes(this.id) && this.team === 1) {
          if (game.highlightedCell === null) game.setHighlightedCell(this.id);else if (isHighlighted) game.setHighlightedCell(null);
        } else if (isHighlighted) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = hits[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var hitId = _step3.value;


              var entity = game.entities[hitId];
              if (entity.type === 'cell') {
                this.toggleTarget(entity.id);
                game.setHighlightedCell(null);
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }

      if (Object.keys(this.targets).length) {
        if (this.rateOfFire.index >= this.rateOfFire.rate) {
          this.rateOfFire.index = 0;

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = Object.keys(this.targets)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var targetId = _step4.value;

              if (!this.targets[targetId]) continue;

              var proton = new _Proton2.default(this.x, this.y, this.team, targetId, this.energyPerShot);
              game.addEntity(proton);
              this.subtractEnergy(this.energyPerShot);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }

        this.rateOfFire.index++;
      }
    }
  }, {
    key: 'getPointPosition',
    value: function getPointPosition(index) {
      var offset = this.drawPoints[index].offset;


      var radius = this.mapEnergyToRadius();
      var radian = 2 * Math.PI * index / CIRCUMEFRENCE_POINTS;

      var px = this.x + radius * Math.cos(radian) + offset.x;
      var py = this.y + radius * Math.sin(radian) + offset.y;

      return { px: px, py: py };
    }
  }, {
    key: 'draw',
    value: function draw(ctx, game) {
      ctx.fillStyle = this.fillColor;
      ctx.strokeStyle = game.highlightedCell === this.id ? HIGHLIGHT_COLOR : this.borderColor;
      ctx.lineWidth = this.mapEnergyToRadius() / 6;

      this.updateDrawPoints();

      ctx.beginPath();

      for (var index = 0; index < CIRCUMEFRENCE_POINTS; index++) {
        var _getPointPosition2 = this.getPointPosition(index),
            px = _getPointPosition2.px,
            py = _getPointPosition2.py;

        index === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);

        // Close the circle
        if (index === CIRCUMEFRENCE_POINTS - 1) {
          var start = this.getPointPosition(0);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHIELD_BUFFER = exports.SHIELD_WIDTH = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _helpers = __webpack_require__(0);

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

    _this.rumble = { x: 0, y: 0 }; // TODO?
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParticleManager = __webpack_require__(9);

var _ParticleManager2 = _interopRequireDefault(_ParticleManager);

var _MouseManager = __webpack_require__(10);

var _MouseManager2 = _interopRequireDefault(_MouseManager);

var _UpdateManager = __webpack_require__(3);

var _UpdateManager2 = _interopRequireDefault(_UpdateManager);

var _RulesManager = __webpack_require__(12);

var _RulesManager2 = _interopRequireDefault(_RulesManager);

var _BotManager = __webpack_require__(13);

var _BotManager2 = _interopRequireDefault(_BotManager);

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
    this.botManager = new _BotManager2.default();

    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);

    this.highlightedCell = null;
    this.nextHighlight = {
      shouldUpdate: false,
      value: null
    };
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
    key: 'setHighlightedCell',
    value: function setHighlightedCell(id) {
      this.nextHighlight = {
        shouldUpdate: true,
        value: id
      };
    }
  }, {
    key: 'updateHighlight',
    value: function updateHighlight() {
      if (!this.nextHighlight.shouldUpdate) return;

      this.highlightedCell = this.nextHighlight.value;
      this.nextHighlight.shouldUpdate = false;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this = this;

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

      // quick hack cause lazy
      if (this.updateManager.mode === _UpdateManager.MODE_SETUP) {
        ctx.fillStyle = '#111';
        ctx.font = 'normal 108px VT323';
        ctx.fillText('Atomic Cells', canvas.width / 4, canvas.height * .50);

        ctx.font = 'normal 64px Arvo';
        ctx.fillText('Instructions below', 215, canvas.height * .75);
      }

      // Render
      this.entityIterator(function (entity) {
        return entity.draw(ctx, _this);
      });
      this.particleManager.draw(ctx, this);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Particle = __webpack_require__(2);

var _Particle2 = _interopRequireDefault(_Particle);

var _helpers = __webpack_require__(0);

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
        var particle = new _Particle2.default(0, 0);
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
    value: function makeParticle(x, y, lifespan) {
      var particle = this.getFree();

      particle.x = x;
      particle.y = y;
      particle.lifespan = lifespan;
      particle.reset();

      return particle;
    }
  }, {
    key: 'makeMany',
    value: function makeMany(x, y, lifespan, total) {
      var particles = [];

      for (var index = 0; index < total; index++) {
        particles.push(this.makeParticle(x, y, lifespan));
      }

      return particles;
    }
  }, {
    key: 'applyEffects',
    value: function applyEffects(particles, key, value) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var particle = _step.value;

          particle[key] = value;
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
    key: 'applyRangedVelocity',
    value: function applyRangedVelocity(particles, direction) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = particles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var particle = _step2.value;

          var newDir = {
            x: direction.x + (0, _helpers.getRandomNum)(-1, 1),
            y: direction.y + (0, _helpers.getRandomNum)(-1, 1)
          };

          particle.direction = (0, _helpers.normalize)(newDir);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

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
      _this.clicks.push({ x: x, y: y });
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
      var _this2 = this;

      game.entityIterator(function (entity) {
        if (entity.type === 'cell') {
          _this2.clicks.forEach(function (point) {
            var intersects = (0, _helpers.pointCircleCollide)(point.x, point.y, entity.x, entity.y, entity.mapEnergyToRadius());
            if (intersects) _this2.hits.push(entity.id);
          });
        }
      });
    }
  }]);

  return MouseManager;
}();

exports.default = MouseManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

var _Particle = __webpack_require__(2);

var _Particle2 = _interopRequireDefault(_Particle);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SPEED = .4;
var LENGTH = 2;

var Proton = function (_Entity) {
  _inherits(Proton, _Entity);

  function Proton(x, y, team, targetId, energy) {
    _classCallCheck(this, Proton);

    var _this = _possibleConstructorReturn(this, (Proton.__proto__ || Object.getPrototypeOf(Proton)).call(this, x, y, 'proton'));

    _this.team = team;
    _this.targetId = targetId;
    _this.energy = energy;
    return _this;
  }

  _createClass(Proton, [{
    key: 'update',
    value: function update(game) {
      var target = game.entities[this.targetId];
      if (!target) {
        game.killEntity(this.id);
        return;
      }

      var dx = target.x - this.x;
      var dy = target.y - this.y;
      var direction = (0, _helpers.normalize)({ x: dx, y: dy });

      this.x += direction.x * SPEED;
      this.y += direction.y * SPEED;

      if ((0, _helpers.pointCircleCollide)(this.x, this.y, target.x, target.y, target.getOuterRadius())) {
        if (target.team !== this.team) {
          game.entities[target.shieldId].addControl(this.team, this.energy);
        } else {
          target.addEnergy(this.energy);
        }

        var particles = game.particleManager.makeMany(this.x, this.y, 500, 10);
        game.particleManager.applyEffects(particles, 'color', (0, _helpers.mapTeamToBorderColor)(target.team));
        game.particleManager.applyEffects(particles, 'speed', 0.5);
        game.particleManager.applyRangedVelocity(particles, { x: direction.x * -1, y: direction.y * -1 });

        game.killEntity(this.id);
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.fillStyle = (0, _helpers.mapTeamToFillColor)(this.team);
      ctx.fillRect(this.x, this.y, LENGTH, LENGTH);
    }
  }]);

  return Proton;
}(_Entity3.default);

exports.default = Proton;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SPAWN_CELLS_PER_PLAYER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UpdateManager = __webpack_require__(3);

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
          game.botManager.spawn(game);
          game.updateManager.changeMode(_UpdateManager.MODE_PLAY);
        }
      }
      // end rule //

      // Rule: If any team has no cells left, game over.
      if (currentMode === _UpdateManager.MODE_PLAY) {
        var team1Total = 0;
        var team2Total = 0;

        game.entityIterator(function (e) {
          if (e.type === 'cell') {
            e.team === 1 ? team1Total++ : team2Total++;
          }
        });

        if (team1Total === 0 || team2Total === 0) {
          game.updateManager.changeMode(_UpdateManager.MODE_END);
        }
      }
      // end rule //
    }
  }]);

  return RulesManager;
}();

exports.default = RulesManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cell = __webpack_require__(5);

var _Cell2 = _interopRequireDefault(_Cell);

var _CellSpawnHelper = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TICKS_PER_LOGIC = 100;

var BotManager = function () {
  function BotManager() {
    _classCallCheck(this, BotManager);

    this.logicTick = 0;
  }

  _createClass(BotManager, [{
    key: 'spawn',
    value: function spawn(game) {
      var rows = game.canvas.height / _Cell.BASE_ENERGY;
      var cols = game.canvas.width / _Cell.BASE_ENERGY;
      var bots = [];

      for (var x = 0; x < cols; x++) {
        for (var y = 0; y < rows; y++) {
          var cell = new _Cell2.default(x * _Cell.BASE_ENERGY, y * _Cell.BASE_ENERGY, 2);
          if ((0, _CellSpawnHelper.isSafe)(cell, game)) bots.push(cell);
        }
      }

      var spawned = 0;
      while (spawned < 4) {
        var pickIndex = Math.floor(Math.random() * bots.length);
        var pick = bots.splice(pickIndex, 1)[0];
        if (!pick) break;
        if (!(0, _CellSpawnHelper.isSafe)(pick, game)) continue;

        game.addEntity(pick);
        spawned++;
      }
    }
  }, {
    key: 'setTargets',
    value: function setTargets(bot, game) {
      var cells = [];
      game.entityIterator(function (entity) {
        if (entity.type === 'cell' && entity.id !== bot.id) cells.push(entity);
      });

      var ranks = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cell = _step.value;

          // Get distance between
          var distance = Math.abs(bot.x - cell.x) + Math.abs(bot.y - cell.y);
          var distanceRank = distance / 100;

          // Prefer enemy team
          var teamRank = cell.team === bot.team ? 10 : 0;

          // Prefer lower shields
          var shieldControl = game.entities[cell.shieldId].control[bot.team];
          var shieldRank = 10 - shieldControl * 10;

          // Prefer higher energy cells
          var energyRank = 10 - cell.energy / 10;

          var rank = distanceRank + teamRank + shieldRank + energyRank;

          ranks.push({ rank: rank, cell: cell });
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

      ranks.sort(function (a, b) {
        return a.rank - b.rank;
      });

      var targets = [ranks[0].cell.id];
      if (bot.energy > _Cell.BASE_ENERGY) {
        targets.push(ranks[1].cell.id);
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var targetId = _step2.value;

          bot.target(targetId);
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
    key: 'update',
    value: function update(game) {
      this.logicTick++;
      if (this.logicTick < TICKS_PER_LOGIC) return;

      this.logicTick = 0;

      var bots = [];
      game.entityIterator(function (entity) {
        if (entity.type === 'cell' && entity.team === 2) {
          bots.push(entity);
        }
      });

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = bots[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var bot = _step3.value;

          bot.clearTargets();
          this.setTargets(bot, game);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }]);

  return BotManager;
}();

exports.default = BotManager;

/***/ })
/******/ ]);