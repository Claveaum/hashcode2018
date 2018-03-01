const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

function solve(problem) {
  // destructure this!
  const { rides, nvehicules } = problem;

  let count = 0;

  const stack = Array(nvehicules)
    .fill()
    .map(() => []);

  for (let index = 0; rides.length; ) {
    if (index % nvehicules === 0) {
      count = 0;
    } else {
      count++;
    }

    stack[count].push(index++);
    rides.shift();
  }

  return _.map(stack, ridesPerVehicle => {
    return `${ridesPerVehicle.length} ${ridesPerVehicle.join(" ")}`;
  });
}

module.exports = solve;
