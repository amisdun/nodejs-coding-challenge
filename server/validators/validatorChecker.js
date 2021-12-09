const express_validator = require("express-validator");
const { errorResponse } = require("../serverResponse/response");
const { validationResult } = express_validator;

const ValidationChecker = (req, res, next) => {
	try {
		const error = validationResult(req);
		if (!error.isEmpty()) return errorResponse(res, error.array(), 400);
		return next();
	} catch (error) {
		return errorResponse(res, error.message, 400);
	}
};

module.exports = { ValidationChecker };
