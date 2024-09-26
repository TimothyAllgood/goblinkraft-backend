import { MonsterAbility } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: MonsterAbility) => {
  try {
    const newMonsterAbility: MonsterAbility =
      await prisma.monsterAbility.create({
        data: body,
      });
    return newMonsterAbility;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const createMany = async (data: MonsterAbility[]) => {
  try {
    const newMonsterAbilities: MonsterAbility[] =
      await prisma.monsterAbility.createMany({
        data,
      });
    return newMonsterAbilities;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: MonsterAbility) => {
  try {
    const updatedMonsterAbility: MonsterAbility =
      await prisma.monsterAbility.update({
        where: { id: body.id },
        data: body,
      });
    return updatedMonsterAbility;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const monsterAbilities: MonsterAbility[] =
      await prisma.monsterAbility.findMany({
        orderBy: {
          id: "asc",
        },
      });
    return monsterAbilities;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const monsterAbilities: MonsterAbility[] =
      await prisma.monsterAbility.findMany({
        where: {
          id,
        },
      });
    return monsterAbilities;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const monsterAbilities: MonsterAbility[] =
      await prisma.monsterAbility.delete({
        where: {
          id,
        },
      });
    return monsterAbilities;
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
