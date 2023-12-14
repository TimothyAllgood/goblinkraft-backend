// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/profiles'

router.get("/:id", userAuth, ctrl.profile.getProfileById);
// exports
module.exports = router;
