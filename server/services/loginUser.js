const { User } = require("../models/user");
const { compareHash } = require("./hashPassword");
const { signToken } = require("./signToken");

const userExist = async (email) => {
	const user = await User.findOne({ email });
	if (!user && !user?._id) throw new Error("User not found");
	return user;
};

const logInUser = async (loginDetails) => {
	const { email, password } = loginDetails;
	const user = await userExist(email);
	await compareHash(user?.password, password);
	const token = signToken(user.toJSON());
	await User.findByIdAndUpdate(user?._id, { isLoggedIn: true, token });
	return token;
};

module.exports = { logInUser };
