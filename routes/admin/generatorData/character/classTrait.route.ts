// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/classTraits/data'

router.post("/", ctrl.classTrait.create);
router.post("/bulk", ctrl.classTrait.createMany);
router.post("/update", ctrl.classTrait.update);
router.get("/", ctrl.classTrait.get);
router.get("/:id", ctrl.classTrait.getById);
router.delete("/delete/:id", ctrl.classTrait.deleteById);

// exports
module.exports = router;
