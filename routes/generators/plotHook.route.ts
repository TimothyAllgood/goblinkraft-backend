// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../controllers");
const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/plothooks'

router.post("/", ctrl.plotHook.generatePlotHook);
router.post("/generate-plothooks", ctrl.plotHook.generatePlotHooks);
router.post("/generate-adventure", ctrl.plotHook.generateAIAdventure);
// exports
module.exports = router;
