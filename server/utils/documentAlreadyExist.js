const documentAlreadyExist = async (model, queryData) => {
	const document = await model.findOne(queryData);
	if (document && document?._id) {
		throw new Error("Data already exist");
	}
};

module.exports = { documentAlreadyExist };
