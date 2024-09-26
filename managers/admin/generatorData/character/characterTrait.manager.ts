import { CharacterTrait } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: CharacterTrait) => {
  try {
    const newCharacterTrait: CharacterTrait =
      await prisma.characterTrait.create({
        data: body,
      });
    return newCharacterTrait;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: CharacterTrait[]) => {
  try {
    const newCharacterTraits: CharacterTrait[] =
      await prisma.characterTrait.createMany({
        data,
      });
    return newCharacterTraits;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: CharacterTrait) => {
  try {
    const updatedCharacterTrait: CharacterTrait =
      await prisma.characterTrait.update({
        where: { id: body.id },
        data: body,
      });
    return updatedCharacterTrait;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const characterTraits: CharacterTrait[] =
      await prisma.characterTrait.findMany({
        orderBy: {
          id: "asc",
        },
      });
    return characterTraits;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const characterTrait: CharacterTrait[] =
      await prisma.characterTrait.findUnique({
        where: {
          id,
        },
        orderBy: {
          id: "asc",
        },
      });
    return characterTrait;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const characterTraits: CharacterTrait[] =
      await prisma.characterTrait.delete({
        where: {
          id,
        },
      });
    return characterTraits;
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
