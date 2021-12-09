const {
	errorResponse,
	successResponse,
} = require("../serverResponse/response");
const { registerUser } = require("../services/registerUser");

const registerUserController = async (req, res) => {
	try {
		const token = await registerUser(req.body);
		successResponse(res, { token }, "OK", 201);
	} catch (error) {
		errorResponse(res, error.message, 400);
	}
};

module.exports = { registerUserController };
