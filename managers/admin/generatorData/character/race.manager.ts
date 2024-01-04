import { Race } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Race) => {
  try {
    console.log(body);
    const newRace: Race = await prisma.race.create({
      data: body,
    });
    return newRace;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Race[]) => {
  try {
    const newRaces: Race[] = await prisma.race.createMany({
      data,
    });
    return newRaces;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Race) => {
  try {
    const updatedRace: Race = await prisma.race.update({
      where: { id: body.id },
      data: body,
    });
    return updatedRace;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const races: Race[] = await prisma.race.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return races;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const race: Race[] = await prisma.race.findUnique({
      where: {
        id,
      },
    });
    return race;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const races: Race[] = await prisma.race.delete({
      where: {
        id,
      },
    });
    return races;
  } catch (error: any) {
    return error;
  }
};

module.exports = {
  create,
  createMany,
  update,
  get,
  getById,
  deleteById,
};
