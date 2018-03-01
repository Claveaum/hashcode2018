const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");
const distance = require("./distance");

function solve(problem) {
  // destructure this!
  let { rides, nvehicules, nsteps } = problem;

  let count = 0;

  const stack = Array(nvehicules)
    .fill()
    .map(() => []);

  rides = rides.sort((a, b) => {
    const distA = distance(0, 0, a.ox, a.oy);
    const distB = distance(0, 0, b.ox, b.oy);

    if (distA < distB) return -1;
    if (distA > distB) return 1;

    return a.start - b.start;
  });

  const copyRides = [...rides];

  let max = nvehicules - 1;

  let index = 0;
  const full = {};

  try {
    for (; copyRides.length; ) {
      const fullTrue = Object.keys(full).length === nvehicules;

      if (fullTrue) {
        break;
      }

      if (count > 0 && count % max === 0) {
        count = 0;
      } else {
        count++;
      }

      const { ox, oy, dx, dy } = rides[index];
      const rideDistance = distance(ox, oy, dx, dy);
      const vehiculeRides = stack[count];

      const somme = vehiculeRides.reduce((sum, rideIndex) => {
        const tasoeur = rides[rideIndex];
        return sum + distance(tasoeur.ox, tasoeur.oy, tasoeur.dx, tasoeur.dy);
      }, 0);

      if (somme + rideDistance < nsteps) {
        stack[count].push(index++);
        copyRides.shift();
      } else {
        full[count] = true;
      }
    }
  } catch (e) {
    console.error(e);
    console.log(index, count, copyRides.length);
  }

  return _.map(stack, ridesPerVehicle => {
    return `${ridesPerVehicle.length} ${ridesPerVehicle.join(" ")}`;
  });
}

module.exports = solve;
