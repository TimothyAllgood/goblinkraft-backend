// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/plothooks/data'

router.post("/", ctrl.plotHookData.create);
router.post("/bulk", ctrl.plotHookData.createMany);
router.post("/update", ctrl.plotHookData.update);
router.get("/", ctrl.plotHookData.get);
router.get("/:id", ctrl.plotHookData.getById);
router.delete("/delete/:id", ctrl.plotHookData.deleteById);

// exports
module.exports = router;
