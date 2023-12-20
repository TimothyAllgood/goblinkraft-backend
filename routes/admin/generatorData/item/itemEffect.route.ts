// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/items/effects'

router.post("/", ctrl.itemEffect.create);
router.post("/bulk", ctrl.itemEffect.createMany);
router.post("/update", ctrl.itemEffect.update);
router.get("/", ctrl.itemEffect.get);
router.get("/:id", ctrl.itemEffect.getById);
router.delete("/delete/:id", ctrl.itemEffect.deleteById);

// exports
module.exports = router;
