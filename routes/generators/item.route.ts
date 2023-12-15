// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/items'

router.get("/", ctrl.item.generateItem);
router.get("/generate-items", ctrl.item.generateItems);
// exports
module.exports = router;
