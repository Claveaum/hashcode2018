const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

function solve(problem) {
  // destructure this!
  const { rides, nsteps } = problem;

  /*
  nsteps.forEach((step, index) => {
  })
  */

  const result = rides.map((ride, index) => `1 ${index}`);

  return result;
}

module.exports = solve;
