import { Campaign } from "@prisma/client";
import exp from "constants";
import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new Campaign
const create = async (req: Request, res: Response) => {
  const { name, userId } = req.body;
  try {
    const newCampaign: Campaign = await prisma.campaign.create({
      data: { name, userId: parseInt(userId, 10) },
    });
    res.status(200).json(newCampaign);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const campaigns: Campaign[] = await prisma.campaign.findMany({
      where: {
        userId: parseInt(userId, 10),
      },
    });
    res.status(200).json(campaigns);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  getById,
};

// // Get all profiles
// exports.getAllProfiles = async (req: Request, res: Response) => {
//   try {
//     const profiles = await prisma.profile.findMany();
//     res.json(profiles);
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get a single profile by ID
// exports.getProfileById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     const profile = await prisma.profile.findUnique({ where: { id } });
//     if (profile) {
//       res.json(profile);
//     } else {
//       res.status(404).send("Profile not found");
//     }
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Update a profile
// exports.updateProfile = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   const { bio, name } = req.body;
//   try {
//     const updatedProfile = await prisma.profile.update({
//       where: { id },
//       data: { bio, name },
//     });
//     res.json(updatedProfile);
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a profile
// exports.deleteProfile = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     await prisma.profile.delete({ where: { id } });
//     res.status(204).send();
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };
