import accessModel from "../models/accessSchema";
import batchModel from "../models/batchSchema";
import {Access} from "../constants/types/access";
import {Batch} from "../constants/types/batch";
import {Preview} from "../constants/types/preview";
import previewModel from "../models/previewSchema";

export const createAccess = async () => {
	const client: Access = {
		client_id: "3gghdfg3jdffe",
		api_key: "dfje33fnr3404nfd",
		isValid: true,
		createdAt: Date.now(),
	};
	accessModel.create(client);
};

export const createBatch = async (batch: Batch) => {
	const newBatch = new batchModel(batch);
	batchModel
		.create(newBatch)
		.then(() => console.log("added to console"))
		.catch(error => console.log(error.message));
};

export const createPreview = async (preview: Preview) => {
	const newPreview = new previewModel(preview);
	previewModel
		.create(newPreview)
		.then(() => console.log("preview created"))
		.catch(err => console.log(err.message));
};
