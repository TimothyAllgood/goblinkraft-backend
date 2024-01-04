// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/npc'

router.post("/", ctrl.npc.generateNpc);
router.post("/generate-npcs", ctrl.npc.generateNpcs);
// exports
module.exports = router;
