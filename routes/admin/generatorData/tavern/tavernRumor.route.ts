// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/taverns/rumors'

router.post("/", ctrl.tavernRumor.create);
router.post("/bulk", ctrl.tavernRumor.createMany);
router.post("/update", ctrl.tavernRumor.update);
router.get("/", ctrl.tavernRumor.get);
router.get("/:id", ctrl.tavernRumor.getById);
router.delete("/delete/:id", ctrl.tavernRumor.deleteById);

// exports
module.exports = router;
