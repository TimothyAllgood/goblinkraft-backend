// imports
import express from "express";
const router = express.Router();
const ctrl = require("../controllers");
const { userAuth, adminAuth } = require("../middleware/auth");

// Current Path = '/api/v1/users'

router.post("/register", ctrl.user.register);
router.post("/login", ctrl.user.login);
router.post("/verify-user", ctrl.user.sendVerification);
router.post("/verify/:id", ctrl.user.verifyUser);
router.post("/reset", ctrl.user.resetPassword);
router.post("/reset-password", ctrl.user.sendPasswordReset);
router.get("/google", ctrl.user.getGoogleUrl);
router.post("/google/user-info", ctrl.user.getGoogleUserInfo);
router.get("/user", userAuth, ctrl.user.getUser);
router.get("/admin", adminAuth, ctrl.user.getAdmin);
router.get("/open", ctrl.user.getOpen);
// exports
module.exports = router;
