import { Spell } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Spell) => {
  try {
    const newSpell: Spell = await prisma.spell.create({
      data: body,
    });
    return newSpell;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Spell[]) => {
  try {
    const newSpells: Spell[] = await prisma.spell.createMany({
      data,
    });
    return newSpells;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Spell) => {
  try {
    const updatedSpell: Spell = await prisma.spell.update({
      where: { id: body.id },
      data: body,
    });
    return updatedSpell;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const spells: Spell[] = await prisma.spell.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return spells;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getAutocomplete = async (search: string) => {
  try {
    const spells: Spell[] = await prisma.spell.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      take: 10,
    });
    return spells;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const spell: Spell[] = await prisma.spell.findUnique({
      where: {
        id,
      },
    });
    return spell;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const spells: Spell[] = await prisma.spell.delete({
      where: {
        id,
      },
    });
    return spells;
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
