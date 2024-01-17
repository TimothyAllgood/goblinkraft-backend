import { Backstory } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Backstory) => {
  try {
    const newBackstory: Backstory = await prisma.backstory.create({
      data: body,
    });
    return newBackstory;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Backstory[]) => {
  try {
    const newBackstories: Backstory[] = await prisma.backstory.createMany({
      data,
    });
    return newBackstories;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Backstory) => {
  try {
    const updatedBackstory: Backstory = await prisma.backstory.update({
      where: { id: body.id },
      data: body,
    });
    return updatedBackstory;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const backstories: Backstory[] = await prisma.backstory.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return backstories;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const backstory: Backstory[] = await prisma.backstory.findUnique({
      where: {
        id,
      },
    });
    return backstory;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const backstories: Backstory[] = await prisma.backstory.delete({
      where: {
        id,
      },
    });
    return backstories;
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
