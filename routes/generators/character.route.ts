// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/characters'

router.post("/", ctrl.character.generateCharacter);
// exports
module.exports = router;
