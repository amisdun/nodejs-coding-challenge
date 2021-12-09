const {
	errorResponse,
	successResponse,
} = require("../serverResponse/response");
const { getUserProfile } = require("../services/getUserProfile");

const getUserProfileController = async (req, res) => {
	try {
		const { _id } = req.user;
		const user = await getUserProfile(_id);
		successResponse(res, { email: user?.email }, "OK", 200);
	} catch (error) {
		errorResponse(res, error.message, 500);
	}
};

module.exports = { getUserProfileController };
