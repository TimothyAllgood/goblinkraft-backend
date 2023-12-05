import { Profile } from "@prisma/client";
import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new profile
exports.createProfile = async (req: Request, res: Response) => {
  const { bio, name, userId } = req.body;
  try {
    const newProfile: Profile = await prisma.profile.create({
      data: { bio, name, userId },
    });
    res.json(newProfile);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get all profiles
exports.getAllProfiles = async (req: Request, res: Response) => {
  try {
    const profiles: Profile[] = await prisma.profile.findMany();
    res.json(profiles);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single profile by ID
exports.getProfileById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const profile: Profile = await prisma.profile.findUnique({ where: { id } });
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).send("Profile not found");
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Update a profile
exports.updateProfile = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const { bio, name }: { bio: string | null; name: string | null } = req.body;
  try {
    const updatedProfile: Profile = await prisma.profile.update({
      where: { id },
      data: { bio, name },
    });
    res.json(updatedProfile);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a profile
exports.deleteProfile = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await prisma.profile.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
