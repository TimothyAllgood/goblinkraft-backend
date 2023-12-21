// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/taverns/features'

router.post("/", ctrl.tavernFeature.create);
router.post("/bulk", ctrl.tavernFeature.createMany);
router.post("/update", ctrl.tavernFeature.update);
router.get("/", ctrl.tavernFeature.get);
router.get("/:id", ctrl.tavernFeature.getById);
router.delete("/delete/:id", ctrl.tavernFeature.deleteById);

// exports
module.exports = router;
