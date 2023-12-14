// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const multer = require("../middleware/photo-config");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/campaigns'

router.post("/create", multer, ctrl.campaign.create);
router.post("/update-image", multer, ctrl.campaign.updateImage);
router.get("/", ctrl.campaign.getByUserId);
router.get("/:id", ctrl.campaign.getById);
router.delete("/delete/:id", userAuth, ctrl.campaign.deleteCampaign);

// exports
module.exports = router;
