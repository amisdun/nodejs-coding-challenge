const express = require("express");
const { authenticate } = require("../auth/userAuth");
const { getUserProfileController } = require("../controllers/get.profile.user");
const { logOutUserController } = require("../controllers/patch.logout.user");
const { logInUserController } = require("../controllers/post.login.user");
const { registerUserController } = require("../controllers/post.register.user");
const { logInValidator } = require("../validators/loginValidator");
const { registerValidator } = require("../validators/registerValidators");
const { ValidationChecker } = require("../validators/validatorChecker");
const router = express.Router();

// user route for CRUD
router.get("/profile", authenticate, getUserProfileController);
router.post("/login", logInValidator, ValidationChecker, logInUserController);
router.post(
	"/register",
	registerValidator,
	ValidationChecker,
	registerUserController,
);
router.post("/logout", authenticate, logOutUserController);

module.exports = router;
