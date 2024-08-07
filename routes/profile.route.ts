// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");

// Current Path = '/api/v1/profiles'

router.get("/:id", ctrl.profile.getProfileById);
router.post("/:id", ctrl.profile.updateProfile);
// exports
module.exports = router;
