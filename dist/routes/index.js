"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generator_1 = require("../controllers/generator");
const listBatches_1 = require("../controllers/listBatches");
const router = express_1.default.Router();
router.post("/generate", generator_1.generator);
router.get("/list_batch", listBatches_1.listBatches);
router.get("/*", () => {
    console.log("cannot find");
});
exports.default = router;
