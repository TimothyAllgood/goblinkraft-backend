// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const multer = require("../middleware/photo-config");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/campaigns'

router.post("/create", [multer, userAuth], ctrl.campaign.create);
router.post("/update-image", [multer, userAuth], ctrl.campaign.updateImage);
router.get("/", userAuth, ctrl.campaign.getByUserId);
router.get("/:id", userAuth, ctrl.campaign.getById);
router.delete("/delete/:id", userAuth, ctrl.campaign.deleteCampaign);
router.get("/npcs/getall/:id", userAuth, ctrl.campaign.getNPCS);
router.get("/npcs/get/:id", userAuth, ctrl.campaign.getNPC);
router.post("/npcs/upsert", userAuth, ctrl.campaign.upsertNPC);
router.delete("/npcs/delete/:id", userAuth, ctrl.campaign.deleteNPC);
router.post(
  "/npcs/update-image",
  [multer, userAuth],
  ctrl.campaign.updateNpcImage
);

// exports
module.exports = router;
