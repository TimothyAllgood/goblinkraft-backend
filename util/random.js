const seedrandom = require("seedrandom");
const { v4: uuidv4 } = require("uuid");

const getRandomElement = (array) => {
  console.log(array);
  const seed = uuidv4();
  const rng = seedrandom(seed);
  const randomIndex = Math.floor(rng() * array.length);
  return array[randomIndex];
};

module.exports = getRandomElement;
