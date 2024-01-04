import { Locale } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Locale) => {
  try {
    console.log(body);
    const newLocale: Locale = await prisma.locale.create({
      data: body,
    });
    return newLocale;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Locale[]) => {
  try {
    const newLocales: Locale[] = await prisma.locale.createMany({
      data,
    });
    return newLocales;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Locale) => {
  try {
    const updatedLocale: Locale = await prisma.locale.update({
      where: { id: body.id },
      data: body,
    });
    return updatedLocale;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const locales: Locale[] = await prisma.locale.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return locales;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const locale: Locale[] = await prisma.locale.findUnique({
      where: {
        id,
      },
    });
    return locale;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const locales: Locale[] = await prisma.locale.delete({
      where: {
        id,
      },
    });
    return locales;
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
