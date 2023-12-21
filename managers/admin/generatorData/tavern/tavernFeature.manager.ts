import { TavernFeature } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: TavernFeature) => {
  try {
    const newTavernFeature: TavernFeature = await prisma.tavernFeature.create({
      data: body,
    });
    return newTavernFeature;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: TavernFeature[]) => {
  try {
    const newTavernFeatures: TavernFeature[] =
      await prisma.tavernFeature.createMany({
        data,
      });
    return newTavernFeatures;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: TavernFeature) => {
  try {
    const updatedTavernFeature: TavernFeature =
      await prisma.tavernFeature.update({
        where: { id: body.id },
        data: body,
      });
    return updatedTavernFeature;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const tavernFeatures: TavernFeature[] = await prisma.tavernFeature.findMany(
      {}
    );
    return tavernFeatures;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const tavernFeatures: TavernFeature[] = await prisma.tavernFeature.findMany(
      {
        where: {
          id,
        },
      }
    );
    return tavernFeatures;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const tavernFeatures: TavernFeature[] = await prisma.tavernFeature.delete({
      where: {
        id,
      },
    });
    return tavernFeatures;
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
