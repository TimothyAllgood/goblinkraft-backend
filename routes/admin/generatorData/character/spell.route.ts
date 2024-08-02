// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/spells/data'

router.post("/", ctrl.spell.create);
router.post("/bulk", ctrl.spell.createMany);
router.post("/update", ctrl.spell.update);
router.get("/", ctrl.spell.get);
router.get("/:id", ctrl.spell.getById);
router.get("/autocomplete/:search", ctrl.spell.getAutocomplete);
router.delete("/delete/:id", ctrl.spell.deleteById);

// exports
module.exports = router;
