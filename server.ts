import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
export const prisma = new PrismaClient();
const routes = require("./routes");
require("dotenv").config();

const port = 8080;
let BASE_URL = "/api/v1";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function main() {
  app.use(express.json());

  // Register API routes
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
