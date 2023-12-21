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

const getRandomDbElement = async (
  seed,
  tableName,
  whereClause,
  genericWhereClause,
  typeWhereClause
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

  console.log(or);
  const ids = await prisma[tableName].findMany({
    where: {
      ...(or.length > 0 ? { OR: or } : {}),
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

module.exports = { getRandomElement, getTrueFalse, getRandomDbElement };
