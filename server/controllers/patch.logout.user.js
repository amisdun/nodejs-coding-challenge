const {
	errorResponse,
	successResponse,
} = require("../serverResponse/response");
const logOutUser = require("../services/logoutUser");

const logOutUserController = async (req, res) => {
	try {
		const { _id } = req.user;
		logOutUser(_id);
		successResponse(res, {}, "loggedOut successful");
	} catch (error) {
		errorResponse(res, error.message);
	}
};

module.exports = { logOutUserController };
