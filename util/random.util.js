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
      ...(or.length > 0 ? { OR: or, AND: and } : {}),
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

module.exports = {
  getRandomElement,
  getTrueFalse,
  getRandomPercent,
  getRandomDbElement,
};
