import { MenuItem } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: MenuItem) => {
  try {
    const newMenuItem: MenuItem = await prisma.menuItem.create({
      data: body,
    });
    return newMenuItem;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: MenuItem[]) => {
  try {
    const newMenuItems: MenuItem[] = await prisma.menuItem.createMany({
      data,
    });
    return newMenuItems;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: MenuItem) => {
  try {
    const updatedMenuItem: MenuItem = await prisma.menuItem.update({
      where: { id: body.id },
      data: body,
    });
    return updatedMenuItem;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const menuItems: MenuItem[] = await prisma.menuItem.findMany({});
    return menuItems;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const menuItems: MenuItem[] = await prisma.menuItem.findMany({
      where: {
        id,
      },
    });
    return menuItems;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const menuItems: MenuItem[] = await prisma.menuItem.delete({
      where: {
        id,
      },
    });
    return menuItems;
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
