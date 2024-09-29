import { Activity } from "@prisma/client";
import { NameInfo } from "../../../models/NameInfo";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (body: NameInfo) => {
  const { name, info } = body;
  try {
    const newActivity: Activity = await prisma.activity.create({
      data: { name, info },
    });
    return newActivity;
  } catch (error: any) {
    return error;
  }
};

const createMany = async (data: NameInfo[]) => {
  // try {
  //   const newActivity: Activity = await prisma.activity.createMany({
  //     data,
  //   });
  //   return newActivity;
  // } catch (error: any) {
  //   console.log(error);
  //   return error;
  // }
  for (const item of data) {
    try {
      // Attempt to insert each item individually
      await prisma.activity.create({
        data: item,
      });
    } catch (error: any) {
      if (error.code === "P2002") {
        // Log the item that caused the unique constraint violation
        console.log(error.meta.target);
        console.log("Unique constraint violation for item: ", item);
      } else {
        // Log other errors
        console.log("Error:", error);
      }
    }
  }
};

const update = async (body: NameInfo) => {
  const { id, name, info } = body;
  try {
    const updatedActivity: Activity = await prisma.activity.update({
      where: { id },
      data: { name, info },
    });
    return updatedActivity;
  } catch (error: any) {
    return error;
  }
};

const get = async () => {
  try {
    const activities: Activity[] = await prisma.activity.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return activities;
  } catch (error: any) {
    return error;
  }
};

const getById = async (id: number) => {
  try {
    const activities: Activity[] = await prisma.activity.findMany({
      where: {
        id,
      },
    });
    return activities;
  } catch (error: any) {
    return error;
  }
};

const deleteById = async (id: number) => {
  try {
    const activities: Activity[] = await prisma.activity.delete({
      where: {
        id,
      },
    });
    return activities;
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
