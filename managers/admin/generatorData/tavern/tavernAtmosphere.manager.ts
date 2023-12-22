import { TavernAtmosphere } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: TavernAtmosphere) => {
  try {
    const newTavernAtmosphere: TavernAtmosphere =
      await prisma.tavernAtmosphere.create({
        data: body,
      });
    return newTavernAtmosphere;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: TavernAtmosphere[]) => {
  try {
    const newTavernAtmospheres: TavernAtmosphere[] =
      await prisma.tavernAtmosphere.createMany({
        data,
        skipDuplicates: true,
      });
    return newTavernAtmospheres;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: TavernAtmosphere) => {
  try {
    const updatedTavernAtmosphere: TavernAtmosphere =
      await prisma.tavernAtmosphere.update({
        where: { id: body.id },
        data: body,
      });
    return updatedTavernAtmosphere;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const tavernAtmospheres: TavernAtmosphere[] =
      await prisma.tavernAtmosphere.findMany({});
    return tavernAtmospheres;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const tavernAtmospheres: TavernAtmosphere[] =
      await prisma.tavernAtmosphere.findMany({
        where: {
          id,
        },
      });
    return tavernAtmospheres;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const tavernAtmospheres: TavernAtmosphere[] =
      await prisma.tavernAtmosphere.delete({
        where: {
          id,
        },
      });
    return tavernAtmospheres;
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
