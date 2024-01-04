// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/races/data'

router.post("/", ctrl.race.create);
router.post("/bulk", ctrl.race.createMany);
router.post("/update", ctrl.race.update);
router.get("/", ctrl.race.get);
router.get("/:id", ctrl.race.getById);
router.delete("/delete/:id", ctrl.race.deleteById);

// exports
module.exports = router;
