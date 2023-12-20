// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/quirks'

router.post("/", ctrl.quirk.create);
router.post("/bulk", ctrl.quirk.createMany);
router.post("/update", ctrl.quirk.update);
router.get("/", ctrl.quirk.get);
router.get("/:id", ctrl.quirk.getById);
router.delete("/delete/:id", ctrl.quirk.deleteById);

// exports
module.exports = router;
