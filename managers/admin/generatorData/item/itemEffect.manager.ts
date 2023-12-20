import { ItemEffect } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: ItemEffect) => {
  try {
    const newItemEffect: ItemEffect = await prisma.itemEffect.create({
      data: body,
    });
    return newItemEffect;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: ItemEffect[]) => {
  try {
    const newItemEffects: ItemEffect[] = await prisma.itemEffect.createMany({
      data,
    });
    return newItemEffects;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: ItemEffect) => {
  try {
    const updatedItemEffect: ItemEffect = await prisma.itemEffect.update({
      where: { id: body.id },
      data: body,
    });
    return updatedItemEffect;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const itemEffects: ItemEffect[] = await prisma.itemEffect.findMany({});
    return itemEffects;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const itemEffects: ItemEffect[] = await prisma.itemEffect.findMany({
      where: {
        id,
      },
    });
    return itemEffects;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const itemEffects: ItemEffect[] = await prisma.itemEffect.delete({
      where: {
        id,
      },
    });
    return itemEffects;
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
