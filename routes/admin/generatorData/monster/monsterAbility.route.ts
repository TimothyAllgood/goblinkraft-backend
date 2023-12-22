// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/monsters/abilities'

router.post("/", ctrl.monsterAbility.create);
router.post("/bulk", ctrl.monsterAbility.createMany);
router.post("/update", ctrl.monsterAbility.update);
router.get("/", ctrl.monsterAbility.get);
router.get("/:id", ctrl.monsterAbility.getById);
router.delete("/delete/:id", ctrl.monsterAbility.deleteById);

// exports
module.exports = router;
