const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
//const distance = require('distance')

function solve(problem) {
  // destructure this!
  const { rides, nvehicules } = problem;

  let count = 0;

  const stack = Array(nvehicules)
    .fill()
    .map(() => []);

  rides.forEach((ride, index) => {
    if (index % nvehicules === 0) {
      count = 0;
    } else {
      count++;
    }

    stack[count].push(index);
  });

  return _.map(stack, ridesPerVehicle => {
    return `${ridesPerVehicle.length} ${ridesPerVehicle.join(" ")}`;
  });
}

module.exports = solve;
