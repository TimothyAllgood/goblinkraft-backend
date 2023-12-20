// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/activities'

router.post("/", ctrl.activity.create);
router.post("/bulk", ctrl.activity.createMany);
router.post("/update", ctrl.activity.update);
router.get("/", ctrl.activity.get);
router.get("/:id", ctrl.activity.getById);
router.delete("/delete/:id", ctrl.activity.deleteById);

// exports
module.exports = router;
