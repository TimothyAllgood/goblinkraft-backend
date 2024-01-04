// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/origins/data'

router.post("/", ctrl.origin.create);
router.post("/bulk", ctrl.origin.createMany);
router.post("/update", ctrl.origin.update);
router.get("/", ctrl.origin.get);
router.get("/:id", ctrl.origin.getById);
router.delete("/delete/:id", ctrl.origin.deleteById);

// exports
module.exports = router;
