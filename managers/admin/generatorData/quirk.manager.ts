import { Quirk } from "@prisma/client";
import { NameInfo } from "../../../models/NameInfo";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: NameInfo) => {
  const { name, info } = body;
  try {
    const newQuirk: Quirk = await prisma.quirk.create({
      data: { name, info },
    });
    return newQuirk;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: NameInfo[]) => {
  try {
    const newQuirk: Quirk = await prisma.quirk.createMany({
      data,
    });
    return newQuirk;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: NameInfo) => {
  const { id, name, info } = body;
  try {
    const updatedQuirk: Quirk = await prisma.quirk.update({
      where: { id },
      data: { name, info },
    });
    return updatedQuirk;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const quirks: Quirk[] = await prisma.quirk.findMany({});
    return quirks;
  } catch (error: any) {
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const quirks: Quirk[] = await prisma.quirk.findMany({
      where: {
        id,
      },
    });
    return quirks;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const quirks: Quirk[] = await prisma.quirk.delete({
      where: {
        id,
      },
    });
    return quirks;
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
