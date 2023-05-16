/* 
if(h >200) accent hue = h-180
else accent hue = 180+h
*/
import {Request, Response} from "express";

import isHsl from "../utils/validations/isHsl";
import hexToHsl from "../utils/converters/hexToHsl";
import {Batch} from "../constants/types/batch";
import {createBatch, createPreview} from "../database/create";
import {readById} from "../database/read";
import generateBatches from "../utils/generateBatche";
import {Preview} from "../constants/types/preview";

export const generator = async (req: Request, res: Response) => {
	const {color} = req.body;
	console.log(color);

	if (color) {
		try {
			let hsl_color = hexToHsl(color);
			let HSL = isHsl(hsl_color, true);
			let h, li, s;
			if (HSL instanceof Array) {
				[h, s, li] = HSL;
				h = parseInt(h);
				s = parseInt(s);
				li = parseInt(li);
				let batch: Batch;
				const result = await readById("" + h + s + li);
				if (result) {
					batch = result;
					console.log("worked");
				} else {
					batch = generateBatches({h, s, li});
					const preview: Preview = {
						batch_id: "" + h + s + li,
						hue: h,
						saturation: s,
						lightness: li,
						preview: batch.colors.hsl.primary,
						base: color,
					};
					createPreview(preview);
					createBatch(batch);
				}
				res.status(200).json(batch);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				res.status(500).json({});
			}
		}
	} else {
		res.status(400).json({error: "error happend"});
	}
};
