import { Profile, User } from "@prisma/client";
import { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

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
    const profile: Profile = await prisma.profile.findUnique({
      where: { userId: id },
    });
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
  const {
    bio,
    firstName,
    lastName,
    username,
    userId,
    colorScheme,
  }: {
    bio: string | null;
    firstName: string;
    lastName: string | null;
    username: string | null;
    userId: number | null;
    colorScheme: string | null;
  } = req.body;
  try {
    const updatedProfile: Profile = await prisma.profile.update({
      where: { id },
      data: { bio, firstName, lastName, colorScheme },
    });

    let token;

    if (updatedProfile && !username) {
      let foundUser: any = await prisma.user.findUnique({
        where: { id: userId },
        include: { profile: { select: { colorScheme: true } } },
      });
      // CREATE TOKEN PAYLOAD
      const payload = {
        id: foundUser.id,
        username: foundUser.username,
        role: foundUser.role,
        subscribed: foundUser.subscribed,
        subscription: foundUser.subscription,
        colorScheme: foundUser.profile.colorScheme,
      };
      const secret = process.env.SECRET;
      const expiration = { expiresIn: "160000s" };

      // SIGN TOKEN
      token = await jwt.sign(payload, secret, expiration);
      return res.status(200).json({ updatedProfile, token });
    }

    if (username) {
      let updatedUser: any = await prisma.user.update({
        where: { id: userId },
        data: { username },
        include: { profile: { select: { colorScheme: true } } },
      });

      if (updatedUser) {
        // CREATE TOKEN PAYLOAD
        const payload = {
          id: updatedUser.id,
          username: updatedUser.username,
          role: updatedUser.role,
          subscribed: updatedUser.subscribed,
          subscription: updatedUser.subscription,
          colorScheme: updatedUser.profile.colorScheme,
        };
        const secret = process.env.SECRET;
        const expiration = { expiresIn: "160000s" };

        // SIGN TOKEN
        token = await jwt.sign(payload, secret, expiration);
        return res.status(200).json({ updatedProfile, token });
      }
    }

    return res.json({ updatedProfile });
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
