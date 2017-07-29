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
  return parseInt(team) === 1 ? '#0074D9' : '#111111';
}

export function mapTeamToBorderColor(team) {
  return parseInt(team) === 1 ? '#001f3f' : '#01FF70';
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
