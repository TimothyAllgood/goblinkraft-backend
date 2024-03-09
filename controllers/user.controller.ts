import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import axios from "axios";
const qs = require("fast-querystring");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
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

    // HASH USER PASSWORD
    const hash = await argon2.hash(req.body.password);
    // CREATE USER WITH HASHED PASSWORD
    const newUser: User = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hash,
        profile: {
          create: { firstName: req.body.username },
        },
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
    const foundUser: any | null = await prisma.user.findUnique({
      where: { username: req.body.username },
      include: { profile: true },
    });

    if (!foundUser) {
      return res.status(400).json({
        status: 400,
        message:
          "Oops! Something went wrong with your login. Please double-check your information and try again.",
      });
    }

    // CHECK IF PASSWORDS MATCH
    const isMatch: boolean = await argon2.verify(
      foundUser.password,
      req.body.password
    );
    if (!isMatch) {
      return res.status(400).json({
        status: 400,
        message:
          "Oops! Something went wrong with your login. Please double-check your information and try again.",
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
      colorScheme: foundUser.profile.colorScheme,
    };
    const secret = process.env.SECRET;
    const expiration = { expiresIn: "160000s" };

    // SIGN TOKEN
    const token = await jwt.sign(payload, secret, expiration);

    // SEND SUCCESS WITH TOKEN

    return res.status(200).json({ token, message: "Log In Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
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
  const link = `${process.env.CLIENT_URL}/verify/${id}`;

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
    const user = await prisma.user.findFirst({
      where: { email: req.body.email },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No user found with that email address" });
    }

    const link = `${process.env.CLIENT_URL}/reset-password/${user.id}`;

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
  // HASH USER PASSWORD
  const hash = await argon2.hash(req.body.password);
  await prisma.user.update({
    where: { id: parseInt(req.body.id, 10) },
    data: { password: hash },
  });
  await res.status(201).json({ message: "Password Successfully Reset" });
};

const getGoogleUrl = async (req: Request, res: Response) => {
  const stringifiedParams = qs.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.CLIENT_URL}/`,
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "), // space seperated string
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
  });

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

  res.json({ url: googleLoginUrl });
};

async function getAccessTokenFromCode(code: string) {
  try {
    const { data } = await axios({
      url: `https://oauth2.googleapis.com/token`,
      method: "post",
      data: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.CLIENT_URL}/`,
        grant_type: "authorization_code",
        code: code,
      },
    });
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
}

const getGoogleUserInfo = async (req: Request, res: Response) => {
  let access_token = await getAccessTokenFromCode(req.body.code);
  try {
    const { data } = await axios({
      url: "https://www.googleapis.com/oauth2/v2/userinfo",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const foundEmail: any | null = await prisma.user.findUnique({
      where: { email: data.email },
      include: { profile: true },
    });

    if (foundEmail && foundEmail.type !== "google") {
      await prisma.user.update({
        where: { email: data.email },
        data: { type: "google" },
      });

      // CREATE TOKEN PAYLOAD
      const payload = {
        id: foundEmail.id,
        username: foundEmail.username,
        role: foundEmail.role,
        subscribed: foundEmail.subscribed,
        subscription: foundEmail.subscription,
      };
      const secret = process.env.SECRET;
      const expiration = { expiresIn: "160000s" };

      // SIGN TOKEN
      const token = await jwt.sign(payload, secret, expiration);

      // SEND SUCCESS WITH TOKEN

      return res.status(200).json({ token, message: "Log In Successful" });
    }

    if (foundEmail && foundEmail.type === "google") {
      // CREATE TOKEN PAYLOAD
      const payload = {
        id: foundEmail.id,
        username: foundEmail.username,
        role: foundEmail.role,
        subscribed: foundEmail.subscribed,
        subscription: foundEmail.subscription,
        colorScheme: foundEmail.profile.colorScheme,
      };
      const secret = process.env.SECRET;
      const expiration = { expiresIn: "160000s" };

      // SIGN TOKEN
      const token = await jwt.sign(payload, secret, expiration);

      // SEND SUCCESS WITH TOKEN

      return res.status(200).json({ token, message: "Log In Successful" });
    }

    if (!foundEmail) {
      let user = {
        email: data.email,
        username: data.name,
        type: "google",
        verified: true,
        profile: {
          create: { firstName: data.name },
        },
      };

      let newUser = await prisma.user.create({
        data: user,
      });

      // CREATE TOKEN PAYLOAD
      const payload = {
        id: newUser.id,
        username: newUser.username,
        role: newUser.role,
        subscribed: newUser.subscribed,
        subscription: newUser.subscription,
      };
      const secret = process.env.SECRET;
      const expiration = { expiresIn: "160000s" };

      // SIGN TOKEN
      const token = await jwt.sign(payload, secret, expiration);

      // SEND SUCCESS WITH TOKEN

      return res.status(200).json({ token, message: "Log In Successful" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  res.send("User protected route");
};

const getAdmin = async (req: Request, res: Response) => {
  res.send("Admin protected route");
};

const getOpen = async (req: Request, res: Response) => {
  res.send("Open route");
};

module.exports = {
  register,
  login,
  verifyUser,
  sendPasswordReset,
  resetPassword,
  sendVerification,
  getUser,
  getAdmin,
  getOpen,
  getGoogleUrl,
  getGoogleUserInfo,
};
