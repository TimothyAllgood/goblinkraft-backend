// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/taverns/atmospheres'

router.post("/", ctrl.tavernAtmosphere.create);
router.post("/bulk", ctrl.tavernAtmosphere.createMany);
router.post("/update", ctrl.tavernAtmosphere.update);
router.get("/", ctrl.tavernAtmosphere.get);
router.get("/:id", ctrl.tavernAtmosphere.getById);
router.delete("/delete/:id", ctrl.tavernAtmosphere.deleteById);

// exports
module.exports = router;
