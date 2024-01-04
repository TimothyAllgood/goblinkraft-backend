// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/classes/data'

router.post("/", ctrl.characterClass.create);
router.post("/bulk", ctrl.characterClass.createMany);
router.post("/update", ctrl.characterClass.update);
router.get("/", ctrl.characterClass.get);
router.get("/:id", ctrl.characterClass.getById);
router.delete("/delete/:id", ctrl.characterClass.deleteById);

// exports
module.exports = router;
