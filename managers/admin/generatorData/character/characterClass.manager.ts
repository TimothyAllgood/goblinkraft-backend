import { CharacterClass } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: CharacterClass) => {
  try {
    console.log(body);
    const newCharacterClass: CharacterClass =
      await prisma.characterClass.create({
        data: body,
      });
    return newCharacterClass;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: CharacterClass[]) => {
  try {
    const newCharacterClasses: CharacterClass[] =
      await prisma.characterClass.createMany({
        data,
      });
    return newCharacterClasses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: CharacterClass) => {
  try {
    const updatedCharacterClass: CharacterClass =
      await prisma.characterClass.update({
        where: { id: body.id },
        data: body,
      });
    return updatedCharacterClass;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const characterClasses: CharacterClass[] =
      await prisma.characterClass.findMany({
        orderBy: {
          id: "asc",
        },
      });
    return characterClasses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const characterClass: CharacterClass[] =
      await prisma.characterClass.findUnique({
        where: {
          id,
        },
      });
    return characterClass;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const characterClasses: CharacterClass[] =
      await prisma.characterClass.delete({
        where: {
          id,
        },
      });
    return characterClasses;
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
