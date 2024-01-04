// imports

import express from "express";
const router = express.Router();
const ctrl = require("../../../../controllers");
// const { userAuth, adminAuth } = require("../../middleware/auth");

// Current Path = '/api/v1/authors/data'

router.post("/", ctrl.author.create);
router.post("/bulk", ctrl.author.createMany);
router.post("/update", ctrl.author.update);
router.get("/", ctrl.author.get);
router.get("/:id", ctrl.author.getById);
router.delete("/delete/:id", ctrl.author.deleteById);

// exports
module.exports = router;
