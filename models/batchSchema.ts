import mongoose, {Schema} from "mongoose";

const batchSchema: Schema = new Schema(
	{
		id: {
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
		colors: {
			hsl: {
				primary: {
					type: Array,
				},
				neutral: {
					type: Array,
				},
				accent: {
					type: Array,
				},
				red: {
					type: Array,
					required: false,
				},
				green: {
					type: Array,
					required: false,
				},
				yellow: {
					type: Array,
					required: false,
				},
			},
			hex: {
				primary: {
					type: Array,
				},
				neutral: {
					type: Array,
				},
				accent: {
					type: Array,
				},
				red: {
					type: Array,
					required: false,
				},
				green: {
					type: Array,
					required: false,
				},
				yellow: {
					type: Array,
					required: false,
				},
			},
			rgb: {
				primary: {
					type: Array,
				},
				neutral: {
					type: Array,
				},
				accent: {
					type: Array,
				},
				red: {
					type: Array,
					required: false,
				},
				green: {
					type: Array,
					required: false,
				},
				yellow: {
					type: Array,
					required: false,
				},
			},
		},
	},
	{collection: "batches"}
);
batchSchema.index({id: 1});
const batchModel = mongoose.model("Batch", batchSchema);
export default batchModel;
