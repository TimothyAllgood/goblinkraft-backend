import { Tone } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Tone) => {
  try {
    console.log(body);
    const newTone: Tone = await prisma.tone.create({
      data: body,
    });
    return newTone;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Tone[]) => {
  try {
    const newTones: Tone[] = await prisma.tone.createMany({
      data,
    });
    return newTones;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Tone) => {
  try {
    const updatedTone: Tone = await prisma.tone.update({
      where: { id: body.id },
      data: body,
    });
    return updatedTone;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const tones: Tone[] = await prisma.tone.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return tones;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const tone: Tone[] = await prisma.tone.findUnique({
      where: {
        id,
      },
    });
    return tone;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const tones: Tone[] = await prisma.tone.delete({
      where: {
        id,
      },
    });
    return tones;
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
