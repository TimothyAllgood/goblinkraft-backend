// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/subclasses/data'

router.post("/", ctrl.subclass.create);
router.post("/bulk", ctrl.subclass.createMany);
router.post("/update", ctrl.subclass.update);
router.get("/", ctrl.subclass.get);
router.get("/:id", ctrl.subclass.getById);
router.get("/autocomplete/:classId/:search", ctrl.subclass.getAutocomplete);
router.delete("/delete/:id", ctrl.subclass.deleteById);

// exports
module.exports = router;
