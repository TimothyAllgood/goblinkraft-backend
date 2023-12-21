import { TavernRumor } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: TavernRumor) => {
  try {
    const newTavernRumor: TavernRumor = await prisma.tavernRumor.create({
      data: body,
    });
    return newTavernRumor;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: TavernRumor[]) => {
  try {
    const newTavernRumors: TavernRumor[] = await prisma.tavernRumor.createMany({
      data,
    });
    return newTavernRumors;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: TavernRumor) => {
  try {
    const updatedTavernRumor: TavernRumor = await prisma.tavernRumor.update({
      where: { id: body.id },
      data: body,
    });
    return updatedTavernRumor;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const tavernRumors: TavernRumor[] = await prisma.tavernRumor.findMany({});
    return tavernRumors;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const tavernRumors: TavernRumor[] = await prisma.tavernRumor.findMany({
      where: {
        id,
      },
    });
    return tavernRumors;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const tavernRumors: TavernRumor[] = await prisma.tavernRumor.delete({
      where: {
        id,
      },
    });
    return tavernRumors;
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
