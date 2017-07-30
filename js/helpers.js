// Generate a random GUID.
// @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
//
// @return String
export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export function mapTeamToFillColor(team) {
  return parseInt(team) === 1 ? '#0074D9' : '#111';
}

export function mapTeamToBorderColor(team) {
  return parseInt(team) === 1 ? '#7FDBFF' : '#01FF70';
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomVelocity() {
  return { x: getRandomInt(-1, 1), y: getRandomInt(-1, 1) };
}

export function otherTeam(team) {
  return parseInt(team) === 1 ? 2 : 1;
}

export function mag(vec) {
  return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y));
}

export function normalize(vec) {
  const m = mag(vec);
  return { x: vec.x / m, y: vec.y / m };
}

export function circleCollide(x1, y1, r1, x2, y2, r2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distance = Math.sqrt((dx * dx) + (dy * dy));
  return distance < (r1 + r2);
}

export function pointCircleCollide(x, y, cx, cy, r) {
  const dx = x - cx;
  const dy = y - cy;
  return (dx * dx) + (dy * dy) <= r * r;
}
