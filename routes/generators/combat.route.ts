// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/combat'

router.post("/", ctrl.combat.generateCombatDescription);
// exports
module.exports = router;
