import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
const app = express();
const cors = require("cors");
export const prisma = new PrismaClient();
const routes = require("./routes");
require("dotenv").config();

const port = process.env.PORT || 4000;
let BASE_URL = "/api/v1";

app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(
//     `${req.method} ${req.url} ${new Date().toLocaleTimeString()} ${
//       res.statusCode
//     }`
//   );
//   next();
// });

async function main() {
  app.use(express.json());

  cloudinary.config({
    cloud_name: "dysoa7nbm",
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  // Register API routes
  app.use(`${BASE_URL}/campaigns`, routes.campaign);
  app.use(`${BASE_URL}/categories`, routes.category);
  app.use(`${BASE_URL}/npcs`, routes.npc);
  app.use(`${BASE_URL}/profiles`, routes.profile);
  app.use(`${BASE_URL}/users`, routes.user);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
