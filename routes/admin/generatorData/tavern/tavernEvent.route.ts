// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/taverns/events'

router.post("/", ctrl.tavernEvent.create);
router.post("/bulk", ctrl.tavernEvent.createMany);
router.post("/update", ctrl.tavernEvent.update);
router.get("/", ctrl.tavernEvent.get);
router.get("/:id", ctrl.tavernEvent.getById);
router.delete("/delete/:id", ctrl.tavernEvent.deleteById);

// exports
module.exports = router;
