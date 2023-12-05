// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/catagories'

router.post("/create", ctrl.category.create);
router.get("/", adminAuth, ctrl.category.get);
router.get("/:id", ctrl.category.getById);
router.delete("/delete/:id", ctrl.category.deleteCategory);

// exports
module.exports = router;
