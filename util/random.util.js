const seedrandom = require("seedrandom");

const getRandomElement = (seed, array) => {
  const rng = seedrandom.alea(seed);
  const randomIndex = Math.floor(rng() * array.length);
  return array[randomIndex];
};

module.exports = getRandomElement;
