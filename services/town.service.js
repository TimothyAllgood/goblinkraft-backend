const { v4: uuidv4 } = require("uuid");
const {
  getRandomElement,
  getRandomDbElement,
  getTrueFalse,
  getRandomPercent,
} = require("../util/random.util");
// const { generateName } = require("../util/tavern.util");
// const { generateNpc } = require("./npc.service");

const size = ["village", "town", "city"];

const generateTown = async () => {
  const seed = uuidv4();
  const seedNumber = seed.replace(/\D/g, "");
};

module.exports = {
  generateTown,
};
