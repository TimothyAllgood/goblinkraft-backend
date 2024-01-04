// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/monsters'

router.post("/", ctrl.monster.generateMonster);
router.post("/generate-monsters", ctrl.monster.generateMonsters);
router.post("/parse", ctrl.monster.parseMonsterJson);
router.post("/updateSource", ctrl.monster.updateMonsterSource);
// exports
module.exports = router;
