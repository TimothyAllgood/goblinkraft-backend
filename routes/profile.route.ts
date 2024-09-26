// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");

// Current Path = '/api/v1/profiles'
router.post("/", ctrl.profile.createProfile);
router.get("/:id", ctrl.profile.getProfileById);
router.get("/username/:id", ctrl.profile.getUsernameById);
router.post("/:id", ctrl.profile.updateProfile);
// exports
module.exports = router;
