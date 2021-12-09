const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const signToken = (data) => {
	const token = jwt.sign(data, process.env.JWT_SECRET, {
		expiresIn: "24h",
	});
	return token;
};

module.exports = { signToken };
