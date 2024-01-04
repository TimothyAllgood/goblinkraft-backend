// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/locales/data'

router.post("/", ctrl.locale.create);
router.post("/bulk", ctrl.locale.createMany);
router.post("/update", ctrl.locale.update);
router.get("/", ctrl.locale.get);
router.get("/:id", ctrl.locale.getById);
router.delete("/delete/:id", ctrl.locale.deleteById);

// exports
module.exports = router;
