const { User } = require("../models/user");

const logOutUser = async (userId) => {
	await User.findByIdAndUpdate(userId, { isLoggedIn: false, token: "" });
};

module.exports = logOutUser;
