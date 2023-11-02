// imports
const router = require("express").Router();
const ctrl = require("../controllers");
const { userAuth } = require("../middleware/auth");

// Current Path = '/api/v1/users'

router.post("/register", ctrl.user.register);
router.post("/login", ctrl.user.login);
router.post("/verify-user", ctrl.user.sendVerification);
router.post("/verify/:id", ctrl.user.verifyUser);
router.post("/reset/:id", ctrl.user.resetPassword);
router.post("/reset-password", ctrl.user.sendPasswordReset);
router.get("/get", userAuth, ctrl.user.getAll);

// exports
module.exports = router;
