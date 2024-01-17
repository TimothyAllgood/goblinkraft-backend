import { Author } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: Author) => {
  try {
    const newAuthor: Author = await prisma.author.create({
      data: body,
    });
    return newAuthor;
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const createMany = async (data: Author[]) => {
  try {
    const newAuthors: Author[] = await prisma.author.createMany({
      data,
    });
    return newAuthors;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: Author) => {
  try {
    const updatedAuthor: Author = await prisma.author.update({
      where: { id: body.id },
      data: body,
    });
    return updatedAuthor;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const authors: Author[] = await prisma.author.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return authors;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const author: Author[] = await prisma.author.findUnique({
      where: {
        id,
      },
    });
    return author;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const authors: Author[] = await prisma.author.delete({
      where: {
        id,
      },
    });
    return authors;
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
