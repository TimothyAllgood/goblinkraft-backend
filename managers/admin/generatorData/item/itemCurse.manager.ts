import { ItemCurse } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: ItemCurse) => {
  try {
    const newItemCurse: ItemCurse = await prisma.itemCurse.create({
      data: body,
    });
    return newItemCurse;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: ItemCurse[]) => {
  try {
    const newItemCurses: ItemCurse[] = await prisma.itemCurse.createMany({
      data,
    });
    return newItemCurses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: ItemCurse) => {
  try {
    const updatedItemCurse: ItemCurse = await prisma.itemCurse.update({
      where: { id: body.id },
      data: body,
    });
    return updatedItemCurse;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const itemCurses: ItemCurse[] = await prisma.itemCurse.findMany({});
    return itemCurses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const itemCurses: ItemCurse[] = await prisma.itemCurse.findMany({
      where: {
        id,
      },
    });
    return itemCurses;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const itemCurses: ItemCurse[] = await prisma.itemCurse.delete({
      where: {
        id,
      },
    });
    return itemCurses;
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
