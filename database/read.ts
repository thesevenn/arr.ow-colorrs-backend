import colorModel from "../models/batchSchema";
import batchModel from "../models/batchSchema";

export const readById: Function = async (id: string) => {
	return await colorModel.findOne({id: id});
};

interface options {
	hue?: string;
	page: number;
	batches?: number;
}

export const readByFilter = async (options: options) => {
	const items: number = options.batches || 15;
	const skip: number = (options.page - 1) * items;
	const filter: Object = options.hue ? {hue: options.hue} : {};
	if ((await batchModel.countDocuments().exec()) > skip * items) {
		console.log("hello");
	}
	try {
		const response = await batchModel.find(filter).limit(items).skip(skip);
		if (response) return response;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
		}
	}
};

/* 

1 page => 15*page 15,15=>,30
*/
