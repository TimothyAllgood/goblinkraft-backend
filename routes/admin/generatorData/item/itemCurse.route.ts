// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/items/curses'

router.post("/", ctrl.itemCurse.create);
router.post("/bulk", ctrl.itemCurse.createMany);
router.post("/update", ctrl.itemCurse.update);
router.get("/", ctrl.itemCurse.get);
router.get("/:id", ctrl.itemCurse.getById);
router.delete("/delete/:id", ctrl.itemCurse.deleteById);

// exports
module.exports = router;
