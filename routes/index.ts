import express from "express";

import {generator} from "../controllers/generator";
import {listBatches} from "../controllers/listBatches";

const router = express.Router();

router.post("/generate", generator);
router.get("/list_batch", listBatches);
router.get("/*", () => {
	console.log("cannot find");
});

export default router;
