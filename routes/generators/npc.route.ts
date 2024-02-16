// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/npc'

router.post("/", ctrl.npc.generateNpc);
router.post("/generate-npcs", ctrl.npc.generateNpcs);
router.post("/generate-ai-npcs", ctrl.npc.aiGenerateNpcs);
router.post("/generate-npc-art", ctrl.npc.generateArt);

// exports
module.exports = router;
