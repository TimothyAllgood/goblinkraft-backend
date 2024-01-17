import { TavernEvent } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: TavernEvent) => {
  try {
    const newTavernEvent: TavernEvent = await prisma.tavernEvent.create({
      data: body,
    });
    return newTavernEvent;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: TavernEvent[]) => {
  try {
    const newTavernEvents: TavernEvent[] = await prisma.tavernEvent.createMany({
      data,
      skipDuplicates: true,
    });
    return newTavernEvents;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: TavernEvent) => {
  try {
    const updatedTavernEvent: TavernEvent = await prisma.tavernEvent.update({
      where: { id: body.id },
      data: body,
    });
    return updatedTavernEvent;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const tavernEvents: TavernEvent[] = await prisma.tavernEvent.findMany({});
    return tavernEvents;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const tavernEvents: TavernEvent[] = await prisma.tavernEvent.findMany({
      where: {
        id,
      },
    });
    return tavernEvents;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const tavernEvents: TavernEvent[] = await prisma.tavernEvent.delete({
      where: {
        id,
      },
    });
    return tavernEvents;
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
