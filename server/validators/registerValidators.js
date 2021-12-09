const express_validator = require("express-validator");

const registerValidator = [
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
	express_validator
		.check("name")
		.notEmpty()
		.withMessage("name must be provided")
		.isString()
		.withMessage("name must be of type string"),
];

module.exports = { registerValidator };
