const { User } = require("../models/user");
const { hashPassword } = require("./hashPassword");
const { documentAlreadyExist } = require("../utils/documentAlreadyExist");
const { signToken } = require("./signToken");

const registerUser = async (userData) => {
	const { password, email } = userData;
	await documentAlreadyExist(User, { email });
	const hashedPassword = await hashPassword(password);
	userData.password = hashedPassword;
	const user = await User.create(userData);
	const token = signToken(user.toJSON());
	await User.findByIdAndUpdate(user?._id, { isLoggedIn: true, token });
	return token;
};

module.exports = { registerUser };
