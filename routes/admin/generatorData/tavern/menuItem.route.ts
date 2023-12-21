// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/taverns/menu-items'

router.post("/", ctrl.menuItem.create);
router.post("/bulk", ctrl.menuItem.createMany);
router.post("/update", ctrl.menuItem.update);
router.get("/", ctrl.menuItem.get);
router.get("/:id", ctrl.menuItem.getById);
router.delete("/delete/:id", ctrl.menuItem.deleteById);

// exports
module.exports = router;
