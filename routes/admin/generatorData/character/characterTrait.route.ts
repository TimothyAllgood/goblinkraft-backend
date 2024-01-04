// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/characterTraits/data'

router.post("/", ctrl.characterTrait.create);
router.post("/bulk", ctrl.characterTrait.createMany);
router.post("/update", ctrl.characterTrait.update);
router.get("/", ctrl.characterTrait.get);
router.get("/:id", ctrl.characterTrait.getById);
router.delete("/delete/:id", ctrl.characterTrait.deleteById);

// exports
module.exports = router;
