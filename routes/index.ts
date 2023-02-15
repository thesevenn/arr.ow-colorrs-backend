import express from "express";

import {generator} from "../controllers/generator";

const router = express.Router();

router.get("/");
router.post("/generate", generator);
router.get("/list-batch:hue");

export default router;
