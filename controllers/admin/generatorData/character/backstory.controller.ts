import { Backstory } from "@prisma/client";
import { Request, Response } from "express";
const manager = require("../../../../managers");

// Create a new Category
const create = async (req: Request, res: Response) => {
  try {
    let data: Backstory = await manager.backstory.create(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const createMany = async (req: Request, res: Response) => {
  try {
    let data: Backstory = await manager.backstory.createMany(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    let data: Backstory = await manager.backstory.update(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const get = async (req: Request, res: Response) => {
  try {
    let data: Backstory = await manager.backstory.get();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    let data: Backstory = await manager.backstory.getById(id);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    let data: Backstory = await manager.backstory.deleteById(id);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
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
