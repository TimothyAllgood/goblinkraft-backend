import { Monster } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Monster) => {
  try {
    const newMonster: Monster = await prisma.monster.create({
      data: body,
    });
    return newMonster;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Monster[]) => {
  try {
    const newMonster: Monster[] = await prisma.monster.createMany({
      data,
    });
    return newMonster;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Monster) => {
  try {
    const updatedMonster: Monster = await prisma.monster.update({
      where: { id: body.id },
      data: body,
    });
    return updatedMonster;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const monster: Monster[] = await prisma.monster.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return monster;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const monster: Monster[] = await prisma.monster.findUnique({
      where: {
        id,
      },
    });
    return monster;
  } catch (error: any) {
    return error;
  }
};

const getAutocomplete = async (search: string) => {
  try {
    const monsters: Monster[] = await prisma.monster.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      take: 10,
    });
    return monsters;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const monster: Monster[] = await prisma.monster.delete({
      where: {
        id,
      },
    });
    return monster;
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
  getAutocomplete,
  deleteById,
};
