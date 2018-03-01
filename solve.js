const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

function solve(problem) {
  // destructure this!
  const { rides, nvehicules } = problem;

  let count = 0;

  const result = {};

  rides.forEach((ride, index) => {
    if (index % nvehicules === 0) {
      count = 0;
    } else {
      count++;
    }

    result[count] = !result[count] ? [index] : [...result[count], index];
  });

  console.log(result);
  return _.map(result, ridesPerVehicle => {
    return `${ridesPerVehicle.length} ${ridesPerVehicle.join(" ")}`;
  });
}

module.exports = solve;
