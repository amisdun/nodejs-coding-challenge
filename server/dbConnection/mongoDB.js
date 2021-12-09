const mongoose = require("mongoose");

class MongDBConnection {
	constructor(MONGO_URI) {
		this.MONGO_URI = MONGO_URI;
	}
	db_connection() {
		mongoose.connect(
			this.MONGO_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) console.log(err.message);
				console.log("database connection established");
			},
		);
	}
}

const MONGO_URI = process.env.MONGODB_URI;

const mongdbConnection = new MongDBConnection(MONGO_URI);

module.exports = mongdbConnection;
