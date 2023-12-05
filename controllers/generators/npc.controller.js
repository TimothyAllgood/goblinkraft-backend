const getRandomElement = require("../../util/random");

const races = [
  "human",
  "elf",
  "dwarf",
  "gnome",
  "tiefling",
  "halfling",
  "half-orc",
  "half-elf",
];
const jobs = {
  human: ["knight", "merchant", "wizard"],
  elf: ["archer", "druid", "enchanter"],
  dwarf: ["warrior", "blacksmith", "miner"],
  gnome: ["inventor", "tinkerer", "alchemist"],
  tiefling: ["warlock", "rogue", "assassin"],
  halfling: ["bard", "ranger", "farmer"],
  "half-orc": ["barbarian", "shaman", "hunter"],
  "half-elf": ["knight", "merchant", "wizard", "archer", "druid", "enchanter"],
};

const genders = ["male", "female"];

const appearances = {
  male: {
    clothing: ["tunic", "leather armor", "noble attire"],
    hair: {
      l: ["short", "long", "bald"],
      style: [
        "straight",
        "curly",
        "wavy",
        "braided",
        "tousled",
        "slicked back",
      ],
      colors: {
        human: ["black", "brown", "blonde", "red", "white"],
        elf: ["black", "brown", "blonde", "red", "white"],
        dwarf: ["black", "brown", "blonde", "red", "white"],
        gnome: ["black", "brown", "blonde", "red", "white"],
        tiefling: ["black", "brown", "blonde", "red", "white"],
        halfling: ["black", "brown", "blonde", "red", "white"],
        "half-orc": ["black", "brown", "blonde", "red", "white"],
        "half-elf": ["black", "brown", "blonde", "red", "white"],
      },
    },
  },
  female: {
    clothing: ["dress", "chainmail", "royal robes"],
    hair: {
      l: ["short", "long"],
      style: [
        "straight",
        "curly",
        "wavy",
        "braided",
        "tousled",
        "slicked back",
      ],
      colors: {
        human: ["black", "brown", "blonde", "red", "white"],
        elf: ["black", "brown", "blonde", "red", "white"],
        dwarf: ["black", "brown", "blonde", "red", "white"],
        gnome: ["black", "brown", "blonde", "red", "white"],
        tiefling: ["black", "brown", "blonde", "red", "white"],
        halfling: ["black", "brown", "blonde", "red", "white"],
        "half-orc": ["black", "brown", "blonde", "red", "white"],
        "half-elf": ["black", "brown", "blonde", "red", "white"],
      },
    },
  },
};

const skinColors = {
  human: ["pale", "fair", "olive", "tan", "brown", "dark"],
  elf: ["pale", "fair", "alabaster", "ivory"],
  dwarf: ["pale", "ruddy", "tan", "bronzed"],
  gnome: ["pale", "fair", "rosy", "tan"],
  tiefling: [
    "crimson",
    "ruby red",
    "ash gray",
    "indigo",
    "violet",
    "obsidian",
    "midnight blue",
  ],
  halfling: ["pale", "fair", "tan", "ruddy"],
  "half-orc": ["green", "gray", "brown", "ebony"],
  "half-elf": [
    "pale",
    "fair",
    "olive",
    "tan",
    "brown",
    "dark",
    "alabaster",
    "ivory",
  ],
};

const generateNpc = async (req, res) => {
  const race = getRandomElement(races);

  const gender = getRandomElement(genders);
  const job = getRandomElement(jobs[race]);
  const clothing = getRandomElement(appearances[gender].clothing);
  const hair = {
    length: getRandomElement(appearances[gender].hair.l),
    style: getRandomElement(appearances[gender].hair.style),
    color: getRandomElement(appearances[gender].hair.colors[race]),
  };
  const skinColor = getRandomElement(skinColors[race]);

  const description = `A ${gender.toLowerCase()} ${race}, working as a ${job}, who wears ${clothing} and has ${
    hair.length
  } ${hair.color} ${hair.style} hair. Their skin is ${skinColor}.`;

  res.json({ description });
};

module.exports = {
  generateNpc,
};
