// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/cultures/data'

router.post("/", ctrl.culture.create);
router.post("/bulk", ctrl.culture.createMany);
router.post("/update", ctrl.culture.update);
router.get("/", ctrl.culture.get);
router.get("/:id", ctrl.culture.getById);
router.delete("/delete/:id", ctrl.culture.deleteById);

// exports
module.exports = router;
