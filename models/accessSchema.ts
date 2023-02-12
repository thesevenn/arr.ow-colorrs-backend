import {Schema} from "mongoose";

const accessSchema = new Schema({
	client_id: {
		type: String,
		require: true,
	},
	api_key: {
		type: String,
		require: true,
	},
});
