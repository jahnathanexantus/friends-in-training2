const mongoose = require("mongoose");

const url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/friends-in-training";

const connect = mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	
});
connect
	.then((db) => {
		console.log("connected to db");
	})
	.catch((err) => {
		console.log(err);
	});
