// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/items'

router.post("/", ctrl.item.generateItem);
router.post("/generate-items", ctrl.item.generateItems);
// exports
module.exports = router;
