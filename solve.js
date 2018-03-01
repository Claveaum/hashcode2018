const debug = require('debug')('solve')
const _ = require('lodash')
const gridUtils = require('./grid-utils')
const distance = require('./distance')

function solve(problem) {
  // destructure this!
  const { rides, nvehicules, nsteps } = problem

  let count = 0

  const stack = Array(nvehicules)
    .fill()
    .map(() => []);

  const copyRides = [...rides]

  for (let index = 0; copyRides.length; ) {
    if (index % nvehicules === 0) {
      count = 0
    } else {
      count++
    }

    const { ox, oy, dx, dy } = rides[index]
    const rideDistance = distance(ox, oy, dx, dy)
    const vehiculeRides = stack[count]

    const somme = vehiculeRides.reduce((sum , rideIndex) => {
      const tasoeur = rides[rideIndex]
      return sum + distance(tasoeur.ox, tasoeur.oy, tasoeur.dx, tasoeur.dy)
    }, 0)

    if (somme + rideDistance < nsteps) {
      stack[count].push(index++);
      copyRides.shift();
    }
  }

  return _.map(stack, ridesPerVehicle => {
    return `${ridesPerVehicle.length} ${ridesPerVehicle.join(" ")}`;
  });
}

module.exports = solve
