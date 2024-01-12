// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/monsters/data'

router.post("/", ctrl.monsterData.create);
router.post("/bulk", ctrl.monsterData.createMany);
router.post("/update", ctrl.monsterData.update);
router.get("/", ctrl.monsterData.get);
router.get("/:id", ctrl.monsterData.getById);
router.get("/autocomplete/:search", ctrl.monsterData.getAutocomplete);
router.delete("/delete/:id", ctrl.monsterData.deleteById);

// exports
module.exports = router;
