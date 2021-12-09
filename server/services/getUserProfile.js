const { User } = require("../models/user");

const getUserProfile = async (userId) => {
	const user = await User.findById(userId);
	return user;
};

module.exports = { getUserProfile };
