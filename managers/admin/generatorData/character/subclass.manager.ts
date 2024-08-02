import { Subclass } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Subclass) => {
  try {
    const newSubclass: Subclass = await prisma.subclass.create({
      data: body,
    });
    return newSubclass;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Subclass[]) => {
  try {
    const newSubclasses: Subclass[] = await prisma.subclass.createMany({
      data,
    });
    return newSubclasses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Subclass) => {
  try {
    const updatedSubclass: Subclass = await prisma.subclass.update({
      where: { id: body.id },
      data: body,
    });
    return updatedSubclass;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const subclasses: Subclass[] = await prisma.subclass.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return subclasses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getAutocomplete = async (search: string, classId: string) => {
  try {
    const subclasses: Subclass[] = await prisma.subclass.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        characterClassId: parseInt(classId, 10),
      },
      take: 10,
    });
    return subclasses;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const subclass: Subclass[] = await prisma.subclass.findUnique({
      where: {
        id,
      },
    });
    return subclass;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const subclasses: Subclass[] = await prisma.subclass.delete({
      where: {
        id,
      },
    });
    return subclasses;
  } catch (error: any) {
    return error;
  }
};

module.exports = {
  create,
  createMany,
  update,
  get,
  getAutocomplete,
  getById,
  deleteById,
};
