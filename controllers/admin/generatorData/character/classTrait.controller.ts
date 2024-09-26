import { ClassTrait } from "@prisma/client";
import { Request, Response } from "express";
const manager = require("../../../../managers");

// Create a new Category
const create = async (req: Request, res: Response) => {
  try {
    let data: ClassTrait = await manager.classTrait.create(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const createMany = async (req: Request, res: Response) => {
  try {
    let data: ClassTrait = await manager.classTrait.createMany(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    let data: ClassTrait = await manager.classTrait.update(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const get = async (req: Request, res: Response) => {
  try {
    let data: ClassTrait = await manager.classTrait.get();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    let data: ClassTrait = await manager.classTrait.getById(id);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getByCharacterClassId = async (req: Request, res: Response) => {
  const characterClass: string = req.params.characterClass;
  try {
    let data: ClassTrait = await manager.classTrait.getByCharacterClassId(
      characterClass
    );
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    let data: ClassTrait = await manager.classTrait.deleteById(id);
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
  getByCharacterClassId,
  deleteById,
};
