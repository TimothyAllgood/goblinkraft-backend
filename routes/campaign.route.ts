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
router.get("/settlements/getall/:id", userAuth, ctrl.campaign.getSettlements);
router.get("/settlements/get/:id", userAuth, ctrl.campaign.getSettlement);
router.post("/settlements/upsert", userAuth, ctrl.campaign.upsertSettlement);
router.delete(
  "/settlements/delete/:id",
  userAuth,
  ctrl.campaign.deleteSettlement
);

// exports
module.exports = router;
