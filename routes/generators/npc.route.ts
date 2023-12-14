// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/npc'

router.get("/", ctrl.npc.generateNpc);
router.get("/generate-npcs", ctrl.npc.generateNpcs);
// exports
module.exports = router;
