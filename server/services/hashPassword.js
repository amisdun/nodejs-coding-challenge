const bcryptjs = require("bcryptjs");

const hashPassword = async (password) => {
	const hashedPassword = await bcryptjs.hash(password, 10);
	if (!hashPassword) throw new Error("Password cannot hashed");
	return hashedPassword;
};

const compareHash = async (hashedPassword, rawPassword) => {
	const compare = await bcryptjs.compare(rawPassword, hashedPassword);
	if (!compare) throw new Error("Invalid credentials");
	return compare;
};

module.exports = { hashPassword, compareHash };
