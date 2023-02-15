import mongoose, {Schema} from "mongoose";

const accessSchema: Schema = new Schema({
	client_id: {
		type: String,
		required: true,
	},
	api_key: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		required: true,
	},
	isValid: {
		type: Boolean,
		required: true,
	},
});

const accessModel = mongoose.model("Access", accessSchema);
export default accessModel;
