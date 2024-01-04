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

app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

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
  // Generators
  app.use(`${BASE_URL}/characters`, routes.character);
  app.use(`${BASE_URL}/items`, routes.item);
  app.use(`${BASE_URL}/monsters`, routes.monster);
  app.use(`${BASE_URL}/npcs`, routes.npc);
  app.use(`${BASE_URL}/plothooks`, routes.plotHook);
  app.use(`${BASE_URL}/taverns`, routes.tavern);
  app.use(`${BASE_URL}/towns`, routes.town);
  // User
  app.use(`${BASE_URL}/profiles`, routes.profile);
  app.use(`${BASE_URL}/users`, routes.user);
  // Admin
  app.use(`${BASE_URL}/admin`, routes.admin);
  // Characters
  app.use(`${BASE_URL}/backstories/data`, routes.backstory);
  app.use(`${BASE_URL}/characterClasses/data`, routes.characterClass);
  app.use(`${BASE_URL}/races/data`, routes.race);
  app.use(`${BASE_URL}/authors/data`, routes.author);
  app.use(`${BASE_URL}/characterTraits/data`, routes.characterTrait);
  app.use(`${BASE_URL}/classTraits/data`, routes.classTrait);
  app.use(`${BASE_URL}/cultures/data`, routes.culture);
  app.use(`${BASE_URL}/locales/data`, routes.locale);
  app.use(`${BASE_URL}/origins/data`, routes.origin);
  app.use(`${BASE_URL}/tones/data`, routes.tone);
  // NPCs
  app.use(`${BASE_URL}/quirks`, routes.quirk);
  app.use(`${BASE_URL}/activities`, routes.activity);
  // Items
  app.use(`${BASE_URL}/items/effects`, routes.itemEffect);
  app.use(`${BASE_URL}/items/curses`, routes.itemCurse);
  // Plot Hooks
  app.use(`${BASE_URL}/plothooks/data`, routes.plotHookData);
  // Tavern
  app.use(`${BASE_URL}/tavern/menu-items`, routes.menuItem);
  app.use(`${BASE_URL}/tavern/atmospheres`, routes.tavernAtmosphere);
  app.use(`${BASE_URL}/tavern/events`, routes.tavernEvent);
  app.use(`${BASE_URL}/tavern/features`, routes.tavernFeature);
  app.use(`${BASE_URL}/tavern/rumors`, routes.tavernRumor);
  // Monster
  app.use(`${BASE_URL}/monsters/data`, routes.monsterData);
  app.use(`${BASE_URL}/monsters/abilities`, routes.monsterAbility);

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
