// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");

// Current Path = '/api/v1/catagories'

router.post("/create", ctrl.category.create);
router.get("/", ctrl.category.get);
router.get("/:id", ctrl.category.getById);
router.delete("/delete/:id", ctrl.category.deleteById);

// exports
module.exports = router;
