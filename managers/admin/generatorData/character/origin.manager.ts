import { Origin } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Origin) => {
  try {
    console.log(body);
    const newOrigin: Origin = await prisma.origin.create({
      data: body,
    });
    return newOrigin;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Origin[]) => {
  try {
    const newOrigins: Origin[] = await prisma.origin.createMany({
      data,
    });
    return newOrigins;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Origin) => {
  try {
    const updatedOrigin: Origin = await prisma.origin.update({
      where: { id: body.id },
      data: body,
    });
    return updatedOrigin;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const origins: Origin[] = await prisma.origin.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return origins;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const origin: Origin[] = await prisma.origin.findUnique({
      where: {
        id,
      },
    });
    return origin;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const origins: Origin[] = await prisma.origin.delete({
      where: {
        id,
      },
    });
    return origins;
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
