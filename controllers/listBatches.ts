import {Response, Request} from "express";
import {Batch} from "../constants/types/batch";
import batchModel from "../models/batchSchema";

export const listBatches = (req: Request, res: Response) => {
	const {page, batches, hue} = req.query;
};
