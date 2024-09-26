import { ClassTrait } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: ClassTrait) => {
  try {
    const newClassTrait: ClassTrait = await prisma.classTrait.create({
      data: body,
    });
    return newClassTrait;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: ClassTrait[]) => {
  try {
    const newClassTraits: ClassTrait[] = await prisma.classTrait.createMany({
      data,
    });
    return newClassTraits;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: ClassTrait) => {
  try {
    const updatedClassTrait: ClassTrait = await prisma.classTrait.update({
      where: { id: body.id },
      data: body,
    });
    return updatedClassTrait;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const classTraits: ClassTrait[] = await prisma.classTrait.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return classTraits;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const classTrait: ClassTrait[] = await prisma.classTrait.findUnique({
      where: {
        id,
      },
    });
    return classTrait;
  } catch (error: any) {
    return error;
  }
};

const getByCharacterClassId = async (characterClass: string) => {
  try {
    const characterClassId = await prisma.characterClass.findFirst({
      where: {
        name: characterClass,
      },
    });
    const classTraits: ClassTrait[] = await prisma.classTrait.findMany({
      where: {
        characterClassId: characterClassId.id,
      },
      orderBy: {
        id: "asc",
      },
    });
    return classTraits;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const classTraits: ClassTrait[] = await prisma.classTrait.delete({
      where: {
        id,
      },
    });
    return classTraits;
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
  getByCharacterClassId,
  deleteById,
};
