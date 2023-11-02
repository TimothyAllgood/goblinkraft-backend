import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();
const sendEmail = require("../util/sendEmail");

const register = async (req: Request, res: Response) => {
  // VALIDATE FIELD INPUT
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "All fields are required. Please try again" });
  }

  // VALIDATE PASSWORD LENGTH
  if (req.body.password.length < 4) {
    return res
      .status(400)
      .json({ message: "Password must be at least 4 characters long" });
  }

  try {
    // CHECK IF EMAIL ALREADY REGISTERED

    const foundEmail: User | null = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    // SEND ERROR IF FOUND USER
    if (foundEmail) {
      return res.status(400).json({
        status: 400,
        message: "Email address has already been registered. Please try again",
      });
    }

    const foundUser: User | null = await prisma.user.findUnique({
      where: { username: req.body.username },
    });

    // SEND ERROR IF FOUND USER
    if (foundUser) {
      return res.status(400).json({
        status: 400,
        message: "Username has already been registered. Please try again",
      });
    }

    // CREATE SALT FOR HASH
    const salt = await bcrypt.genSalt(10);
    // HASH USER PASSWORD
    const hash = await bcrypt.hash(req.body.password, salt);
    // CREATE USER WITH HASHED PASSWORD
    const newUser: User = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hash,
      },
    });

    await generateVerification(newUser.id, newUser.email);

    // CREATE TOKEN PAYLOAD
    const payload = { id: newUser.id };
    const secret = process.env.SECRET;
    const expiration = { expiresIn: "365 days" };

    // SIGN TOKEN
    const token = await jwt.sign(payload, secret, expiration);

    // SEND SUCCESS
    return res.status(201).json({ token, message: "success" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    // FIND USER BY USERNAME
    const foundUser: User | null = await prisma.user.findUnique({
      where: { username: req.body.username },
    });

    if (!foundUser) {
      return res.status(400).json({
        status: 400,
        message: "Username is incorrect",
      });
    }

    // CHECK IF PASSWORDS MATCH
    const isMatch: boolean = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );
    if (!isMatch) {
      return res.status(400).json({
        status: 400,
        message: "Password is incorrect",
      });
    }

    if (!foundUser.verified) {
      return res.status(400).json({
        status: 400,
        message: "Please Verify Account",
      });
    }

    // CREATE TOKEN PAYLOAD
    const payload = {
      id: foundUser.id,
      username: foundUser.username,
      role: foundUser.role,
      subscribed: foundUser.subscribed,
      subscription: foundUser.subscription,
    };
    const secret = process.env.SECRET;
    const expiration = { expiresIn: "160000s" };

    // SIGN TOKEN
    const token = await jwt.sign(payload, secret, expiration);

    // SEND SUCCESS WITH TOKEN

    return res.status(200).json({ token, message: "Log In Successful" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

const getAll = async (req: Request, res: Response, next: any) => {
  const allUsers: User[] = await prisma.user.findMany();
  res.json(allUsers);
};

const sendVerification = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No user found with that email address" });
    }

    await generateVerification(user.id, user.email);

    return res.status(201).json({ message: "Verification Link Sent" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

const generateVerification = async (id: number, email: string) => {
  const link = `http://localhost:8080/api/v1/users/verify/${id}`;

  await sendEmail(email, "Verify Account", link);
};

const verifyUser = async (req: Request, res: Response) => {
  try {
    await prisma.user.update({
      where: { id: parseInt(req.params.id, 10) },
      data: { verified: true },
    });
    await res.status(201).json({ message: "User Verified" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

const sendPasswordReset = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No user found with that email address" });
    }

    const link = `http://localhost:3000/reset-password/${user.id}`;

    await sendEmail(user.email, "Password reset", link);

    return res.status(201).json({ message: "Password Reset Link Sent" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

const resetPassword = async (req: Request, res: Response) => {
  jwt.verify(
    req.params.token,
    process.env.JWT_SECRET,
    async (err: Error, decodedUser: User) => {
      if (err || !decodedUser) {
        return res.status(401).json({
          message: "You are not authorized. Please login and try again",
        });
      } else {
        // CREATE SALT FOR HASH
        const salt = await bcrypt.genSalt(10);
        // HASH USER PASSWORD
        const hash = await bcrypt.hash(req.body.password, salt);

        await prisma.user.update({
          where: { id: parseInt(req.params.id, 10) },
          data: { password: hash },
        });
        await res.status(201).json({ message: "Password Successfully Reset" });
      }
    }
  );
};

module.exports = {
  register,
  login,
  getAll,
  verifyUser,
  sendPasswordReset,
  resetPassword,
  sendVerification,
};
