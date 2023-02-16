import colorModel from "../models/batchSchema";
import batchModel from "../models/batchSchema";
import {Batch} from "../constants/types/batch";

import {Document} from "mongoose";

export const readById: Function = async (id: string) => {
	return await colorModel.findOne({id: id});
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
		(await batchModel.countDocuments()) - options.page * items;
	if (left <= 0 && options.page > 1) {
		return {
			batches: [],
			batches_left: 0,
		};
	}
	try {
		const response = await batchModel.find(filter).limit(items).skip(skip);
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

/* 

1 page => 15*page 15,15=>,30
*/
