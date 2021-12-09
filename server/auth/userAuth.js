const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { errorResponse } = require("../serverResponse/response");

const authenticate = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization)
		errorResponse(res, "No Authorization found in header", 401);
	const token = authorization?.split(" ")[1];
	jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
		if (err) errorResponse(res, err.message, 400);
		const user = await User.findById(decode?._id);
		if (!user?.token && !user?.isLoggedIn)
			errorResponse(res, "Invalid token, Please LogIn Again");
		req.user = decode;
		next();
	});
};

module.exports = { authenticate };
