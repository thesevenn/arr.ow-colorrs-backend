import {Schema, model} from "mongoose";

const previewSchema = new Schema({
	batch_id: {
		type: String,
		unique: true,
		required: true,
	},
	createdAt: {
		type: Number,
		default: Date.now(),
	},
	hue: {
		type: Number,
		required: true,
	},
	saturation: {
		type: Number,
		required: true,
	},
	lightness: {
		type: Number,
		required: true,
	},
	preview: {
		type: Array,
		required: true,
	},
	base: {
		type: String,
		required: true,
	},
});

const previewModel = model("Preview", previewSchema);
export default previewModel;
