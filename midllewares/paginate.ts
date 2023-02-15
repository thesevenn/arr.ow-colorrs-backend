import {Request, Response, NextFunction} from "express";
import {Model, Schema, Query} from "mongoose";

interface page extends Response {
	result: string;
}
export default function paginate(model: Model<Schema>) {
	return async (req: Request, res: page, next: NextFunction) => {
		const result = await model.find().limit(6).skip(4);

		next();
	};
}
