import express from "express";

import {generator} from "../controllers/generator";
import {listBatches} from "../controllers/listBatches";

const router = express.Router();

router.post("/generate", generator);
router.get("/list-batch", listBatches);
router.get("/*", (req, res) => {
	console.log("cannot find");
	res.send(
		`
	<div>
	<h1>Cannot find what you are looking for...</h1>
	<a href="/">Go Back</a>
	</div>
	`
	);
});

export default router;
