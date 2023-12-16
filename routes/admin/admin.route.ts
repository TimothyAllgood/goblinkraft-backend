// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/items'

router.post("/info", ctrl.admin.parseWithInfo);
// exports
module.exports = router;
