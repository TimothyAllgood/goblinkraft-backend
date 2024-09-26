import { PlotHook } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: PlotHook) => {
  try {
    const newPlotHook: PlotHook = await prisma.plotHook.create({
      data: body,
    });
    return newPlotHook;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: PlotHook[]) => {
  try {
    const newPlotHook: PlotHook[] = await prisma.plotHook.createMany({
      data,
    });
    return newPlotHook;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};

const update = async (body: PlotHook) => {
  try {
    const updatedPlotHook: PlotHook = await prisma.plotHook.update({
      where: { id: body.id },
      data: body,
    });
    return updatedPlotHook;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const plotHooks: PlotHook[] = await prisma.plotHook.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return plotHooks;
  } catch (error: any) {
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const plotHooks: PlotHook[] = await prisma.plotHook.findMany({
      where: {
        id,
      },
    });
    return plotHooks;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const plotHooks: PlotHook[] = await prisma.plotHook.delete({
      where: {
        id,
      },
    });
    return plotHooks;
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
