import { Culture } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Culture) => {
  try {
    const newCulture: Culture = await prisma.culture.create({
      data: body,
    });
    return newCulture;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Culture[]) => {
  try {
    const newCultures: Culture[] = await prisma.culture.createMany({
      data,
    });
    return newCultures;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Culture) => {
  try {
    const updatedCulture: Culture = await prisma.culture.update({
      where: { id: body.id },
      data: body,
    });
    return updatedCulture;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const cultures: Culture[] = await prisma.culture.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return cultures;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const culture: Culture[] = await prisma.culture.findUnique({
      where: {
        id,
      },
    });
    return culture;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const cultures: Culture[] = await prisma.culture.delete({
      where: {
        id,
      },
    });
    return cultures;
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
