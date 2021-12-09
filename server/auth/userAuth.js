const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { errorResponse } = require("../serverResponse/response");

const authenticate = (req, res, next) => {
	try {
		const { authorization } = req.headers;
		if (!authorization) throw new Error("No Authorization found in header");
		const token = authorization?.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
			if (err) throw new Error(err.message);
			const user = await User.findById(decode?._id);
			if (!user?.token && !user?.isLoggedIn)
				throw new Error("Invalid token, Please LogIn Again");
			req.user = decode;
			next();
		});
	} catch (error) {
		errorResponse(res, error.message, 401);
	}
};

module.exports = { authenticate };
