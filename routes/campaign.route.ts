// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/campaigns'

router.post("/create", ctrl.campaign.create);
router.get("/get", ctrl.campaign.getById);

// exports
module.exports = router;
