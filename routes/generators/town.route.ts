// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/towns'

router.post("/", ctrl.town.generateTown);
// exports
module.exports = router;
