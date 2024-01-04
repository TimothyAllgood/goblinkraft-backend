import { Campaign, Image, NPC, User } from "@prisma/client";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
import * as cloudinary from "cloudinary";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new Campaign
const create = async (req: any, res: Response) => {
  const { name, userId } = req.body;

  try {
    if (req.file) {
      cloudinary.v2.uploader.upload(
        req.file.path,
        async function (error: any, result: any) {
          if (result) {
            const newImage: Image = await prisma.image.create({
              data: {
                url: result.url,
                assetId: result.asset_id,
                publicId: result.public_id,
              },
            });

            const newCampaign: Campaign = await prisma.campaign.create({
              data: {
                name,
                userId: parseInt(userId, 10),
                backgroundImageId: newImage.id,
              },
              include: { backgroundImage: true },
            });

            res.status(200).json(newCampaign);
          }
        }
      );
    } else {
      const newCampaign: Campaign = await prisma.campaign.create({
        data: {
          name,
          userId: parseInt(userId, 10),
        },
      });
      res.status(200).json(newCampaign);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getByUserId = async (req: Request, res: Response) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      jwt.verify(
        token,
        process.env.SECRET,
        async (err: Error, decodedUser: User) => {
          const campaigns: Campaign[] = await prisma.campaign.findMany({
            where: {
              userId: decodedUser.id,
            },
            select: {
              id: true,
              name: true,
              backgroundImage: true,
            },
            orderBy: {
              id: "asc",
            },
          });
          res.status(200).json(campaigns);
        }
      );
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const campaigns: Campaign[] = await prisma.campaign.findFirst({
      where: {
        id: parseInt(id, 10),
      },

      include: { backgroundImage: true },
    });
    res.status(200).json(campaigns);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCampaign = async (req: any, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const campaign = await prisma.campaign.findFirst({
      where: { id: id },
      include: { backgroundImage: true },
    });
    if (campaign.backgroundImage) {
      cloudinary.v2.uploader.destroy(
        campaign.backgroundImage.publicId,
        async function (result: any) {
          await prisma.image.delete({
            where: { id: campaign.backgroundImage.id },
          });
        }
      );
    }
    await prisma.campaign.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const updateImage = async (req: any, res: Response) => {
  const { campaignId } = req.body;

  try {
    const campaign = await prisma.campaign.findFirst({
      where: { id: parseInt(campaignId, 10) },
      include: { backgroundImage: true },
    });
    if (campaign.backgroundImage) {
      cloudinary.v2.uploader.destroy(
        campaign.backgroundImage.publicId,
        function (result: any) {
          console.log(result);
        }
      );
    }
    if (req.file) {
      cloudinary.v2.uploader.upload(
        req.file.path,
        async function (error: any, result: any) {
          if (result) {
            const newImage: Image = await prisma.image.create({
              data: {
                url: result.url,
                assetId: result.asset_id,
                publicId: result.public_id,
              },
            });

            const newCampaign: Campaign = await prisma.campaign.update({
              where: {
                id: parseInt(campaignId, 10),
              },
              data: {
                backgroundImageId: newImage.id,
              },
              include: { backgroundImage: true },
            });

            res.status(200).json(newCampaign);
          }
        }
      );
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getNPCS = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const npcs: NPC[] = await prisma.NPC.findMany({
      where: {
        campaignId: parseInt(id, 10),
      },
      orderBy: {
        id: "asc",
      },
    });
    res.status(200).json(npcs);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const getNPC = async (req: any, res: Response) => {
  const { id } = req.params;

  try {
    const npcs: NPC[] = await prisma.NPC.findFirst({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.status(200).json(npcs);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const upsertNPC = async (req: any, res: Response) => {
  const { id, npc } = req.body;
  try {
    let upsertedNPC;
    if (!npc.id) {
      upsertedNPC = await prisma.NPC.create({
        data: {
          name: npc.name,
          campaign: {
            connect: { id: parseInt(npc.campaignId, 10) },
          },
        },
      });
    } else {
      upsertedNPC = await prisma.NPC.update({
        where: { id: npc.id },
        data: {
          name: npc.name,
          campaign: {
            connect: { id: parseInt(npc.campaignId, 10) },
          },
        },
      });
    }

    res.status(200).json(upsertedNPC);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  getByUserId,
  getById,
  updateImage,
  deleteCampaign,
  getNPCS,
  getNPC,
  upsertNPC,
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
