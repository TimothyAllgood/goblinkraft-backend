import { Category } from "@prisma/client";
import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new Category
const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newCategory: Category = await prisma.category.create({
      data: { name },
    });
    res.status(200).json(newCategory);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const get = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await prisma.category.findMany({});
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const categories: Category[] = await prisma.category.findMany({
      where: {
        id,
      },
    });
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const categories: Category[] = await prisma.category.delete({
      where: {
        id,
      },
    });
    res.status(200).json(categories);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  get,
  getById,
  deleteCategory,
};
