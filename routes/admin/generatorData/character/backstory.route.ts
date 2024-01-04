// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/backstories/data'

router.post("/", ctrl.backstory.create);
router.post("/bulk", ctrl.backstory.createMany);
router.post("/update", ctrl.backstory.update);
router.get("/", ctrl.backstory.get);
router.get("/:id", ctrl.backstory.getById);
router.delete("/delete/:id", ctrl.backstory.deleteById);

// exports
module.exports = router;
