const seedrandom = require("seedrandom");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getRandomElement = (seed, array) => {
  const rng = seedrandom.alea(seed);
  const randomIndex = Math.floor(rng() * array.length);
  return array[randomIndex];
};

const getTrueFalse = (seed, percent) => {
  const rng = seedrandom.alea(seed);
  const value = rng();
  return value <= percent;
};

const getRandomPercent = (seed, minPercent = 0, maxPercent) => {
  const rng = seedrandom.alea(seed);
  const randomDecimal = rng(); // Generates a number between 0 and 1
  const range = maxPercent - minPercent;
  const percent = minPercent + randomDecimal * range; // Scale it to maxPercent
  return percent / 100;
};

const getRandomDiceRoll = (seed, diceSize = 32) => {
  const rng = seedrandom.alea(seed); // Create a seeded RNG instance

  // Generate a random floating-point number between 0 (inclusive) and 32 (exclusive)
  const randomValue = rng() * diceSize;

  // Round the random value up to the nearest integer to get a whole number between 1 and 32
  const randomInt = Math.ceil(randomValue);

  return randomInt;
};

const getRandomDbElement = async (
  seed,
  tableName,
  whereClause = {},
  genericWhereClause = {},
  typeWhereClause = [],
  andClause = {}
) => {
  const or = [];

  if (whereClause?.field) {
    or.push({ [whereClause.field]: whereClause.value });
  }
  if (genericWhereClause?.field) {
    or.push({ [genericWhereClause.field]: genericWhereClause.value });
  }
  if (typeWhereClause?.length > 0) {
    or.push(...typeWhereClause);
  }

  let and = {};
  if (andClause) {
    and = [{ [andClause.field]: andClause.value }];
  }

  const ids = await prisma[tableName].findMany({
    where: {
      ...(or.length > 0
        ? { OR: or, ...(and.length > 0 ? { AND: and } : {}) }
        : {}),
    },

    select: { id: true },
  });

  if (ids?.length > 0) {
    let { id } = getRandomElement(seed + tableName, ids);
    const element = await prisma[tableName].findUnique({
      where: {
        id,
      },
    });
    return element;
  } else {
    console.log("No Elements Found");
    return;
  }
};

const getRandomFilteredMonster = async (seed, tableName, filters) => {
  const ids = await prisma[tableName].findMany({
    where: {
      AND: [
        filters?.source?.length > 0 ? { OR: filters.source } : {},
        filters?.type?.length > 0 ? { OR: filters.type } : {},
        filters?.environment?.length > 0 ? { OR: filters.environment } : {},
      ],
      // ...(or.length > 0
      //   ? { OR: or, ...(and.length > 0 ? { AND: and } : {}) }
      //   : {}),
    },
    select: { id: true },
  });

  // console.log(filters?.source?.length > 0 ? { OR: filters.source } : {});

  if (ids?.length > 0) {
    let { id } = getRandomElement(seed + tableName, ids);
    const element = await prisma[tableName].findUnique({
      where: {
        id,
      },
    });
    return element;
  } else {
    console.log("No Elements Found");
    return;
  }
};

const getRandomFilteredBackstory = async (seed, tableName, classId, raceId) => {
  const ids = await prisma[tableName].findMany({
    where: {
      OR: [
        {
          characterClassId: classId,
        },
        {
          raceId: raceId,
        },
        { AND: [{ characterClassId: null }, { raceId: null }] },
      ],
    },
    select: { id: true },
  });

  if (ids?.length > 0) {
    let { id } = getRandomElement(seed + tableName, ids);
    const element = await prisma[tableName].findUnique({
      where: {
        id,
      },
    });
    return element;
  } else {
    console.log("No Elements Found");
    return;
  }
};

const getRandomCharacterTraits = async (seed) => {
  const traits = await prisma.characterTrait.findMany();
  const res = [];

  if (traits?.length > 0) {
    traits.forEach((trait) => {
      let answer = getRandomElement(
        seed + "characterTrait" + trait.question,
        trait.answers
      );
      res.push({
        question: trait.question,
        answer: answer,
        hint: trait.hint,
      });
    });
    return res;
  } else {
    console.log("No Elements Found");
    return;
  }
};

const getRandomClassTraits = async (seed, characterClassId) => {
  const traits = await prisma.classTrait.findMany({
    where: { characterClassId: characterClassId },
  });
  const res = [];

  if (traits?.length > 0) {
    traits.forEach((trait) => {
      let answer = getRandomElement(
        seed + "characterTrait" + trait.question + characterClassId,
        trait.answers
      );
      res.push({
        question: trait.question,
        answer: answer,
        hint: trait.hint,
      });
    });
    return res;
  } else {
    console.log("No Elements Found");
    return;
  }
};

module.exports = {
  getRandomElement,
  getTrueFalse,
  getRandomPercent,
  getRandomDbElement,
  getRandomFilteredMonster,
  getRandomFilteredBackstory,
  getRandomDiceRoll,
  getRandomCharacterTraits,
  getRandomClassTraits,
};
