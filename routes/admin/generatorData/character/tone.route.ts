// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/tones/data'

router.post("/", ctrl.tone.create);
router.post("/bulk", ctrl.tone.createMany);
router.post("/update", ctrl.tone.update);
router.get("/", ctrl.tone.get);
router.get("/:id", ctrl.tone.getById);
router.delete("/delete/:id", ctrl.tone.deleteById);

// exports
module.exports = router;
