import batchModel from "../models/batchSchema";
import previewModel from "../models/previewSchema";

export const readById: Function = async (id: string) => {
	return await batchModel.findOne({id: id});
};

export interface options {
	hue?: number;
	page: number;
	batches?: number;
}

export const readByFilter = async (options: options) => {
	const items: number = options.batches || 15;
	const skip: number = (options.page - 1) * items;
	const filter: Object = options.hue ? {hue: options.hue} : {};
	const left: number =
		(await previewModel.countDocuments()) - options.page * items;
	if (left <= 0 && options.page > 1) {
		return {
			batches: [],
			batches_left: 0,
		};
	}
	try {
		const response = await previewModel.find(filter).limit(items).skip(skip);
		if (response) {
			return {
				batches: response,
				batches_left: left > 0 ? left : 0,
			};
		} else {
			return {
				batches: [],
				batches_left: left > 0 ? left : 0,
			};
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
};
