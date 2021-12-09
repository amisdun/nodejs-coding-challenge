const express_validator = require("express-validator");

const logInValidator = [
	express_validator
		.check("email")
		.notEmpty()
		.withMessage("Email cannot be empty")
		.isEmail()
		.withMessage("Invalid email format"),
	express_validator
		.check("password")
		.notEmpty()
		.withMessage("password must be provided")
		.isString()
		.withMessage("password must be of type string"),
];

module.exports = { logInValidator };
