const {
	errorResponse,
	successResponse,
} = require("../serverResponse/response");
const { logInUser } = require("../services/loginUser");

const logInUserController = async (req, res) => {
	try {
		const token = await logInUser(req.body);
		successResponse(res, { token }, "LogIn successful");
	} catch (error) {
		errorResponse(res, error.message);
	}
};

module.exports = { logInUserController };
