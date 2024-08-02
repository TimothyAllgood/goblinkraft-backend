import express, { Request, Response } from "express";

import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Oa1w7CnGy8JPFhxvsACKgZXq9BFQzP4QRTUaVI6giwgAjHX5KRxOISnrZAsaL0fJ77KEVqJHWSc6ILqIFTk7ACJ005mLejVMW"
);
import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const routes = require("./routes");
const endpointSecret =
  process.env.endpointSecret ||
  "whsec_1973f0378e270f94e245cf3fa569e556e5b42ea9e1970d89c6ce2bc362193758";
const port = process.env.PORT || 4000;
let BASE_URL = "/api/v1";

app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
  })
);

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (request, response) => {
    const payload = request.body;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );

      const lineItems = sessionWithLineItems.line_items;

      // Save subscription
      const user = await prisma.user.update({
        where: {
          email: sessionWithLineItems?.customer_details?.email || "",
        },
        data: {
          subscription: lineItems.data[0].description.toLowerCase(),
          subscriptionId: sessionWithLineItems?.subscription,
          customerId: sessionWithLineItems?.customer,
          subscribed: true,
        },
        include: {
          profile: true,
        },
      });
    }

    if (event.type === "invoice.paid") {
      // Update subscription
    }

    if (event.type === "invoice.payment_failed") {
      // Update subscription, send email
    }

    response.status(200).end();
  }
);

app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.url} ${new Date().toLocaleTimeString()} ${
      res.statusCode
    }`
  );
  next();
});

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
  app.use(`${BASE_URL}/combat`, routes.combat);
  // User
  app.use(`${BASE_URL}/profiles`, routes.profile);
  app.use(`${BASE_URL}/users`, routes.user);
  // Admin
  app.use(`${BASE_URL}/admin`, routes.admin);
  // Characters
  app.use(`${BASE_URL}/backstories/data`, routes.backstory);
  app.use(`${BASE_URL}/characterClasses/data`, routes.characterClass);
  app.use(`${BASE_URL}/subclasses/data`, routes.subclass);
  app.use(`${BASE_URL}/spells/data`, routes.spell);
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

  app.post("/create-subscription", async (req, res) => {
    const { priceId } = req.body;
    console.log(priceId);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      ui_mode: "embedded",
      return_url: `${process.env.CLIENT_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    res.status(200).json({
      clientSecret: session.client_secret,
    });
  });

  app.get("/session-status", async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );

    res.send({
      status: session.status,
      customer_email: session.customer_details.email,
    });
  });

  // Catch unregistered routes
  app.all("*", (req, res) => {
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
