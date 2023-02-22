import {Response, Request} from "express";
import {readByFilter} from "../database/read";
import {options} from "../database/read";

export const listBatches = async (req: Request, res: Response) => {
	const {hue, batches, page} = req.query as unknown as options;
	console.log(hue, batches, page);
	const result = await readByFilter({hue, batches, page: page || 1});
	if (result) {
		res.status(200).json({
			total: result.batches.length,
			status: "success",
			page: page,
			left: result.batches_left,
			batches: result.batches,
		});
	}
};
