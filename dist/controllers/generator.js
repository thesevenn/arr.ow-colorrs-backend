"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
const isHsl_1 = __importDefault(require("../utils/validations/isHsl"));
const hexToHsl_1 = __importDefault(require("../utils/converters/hexToHsl"));
const create_1 = require("../database/create");
const read_1 = require("../database/read");
const generateBatche_1 = __importDefault(require("../utils/generateBatche"));
const generator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { color } = req.body;
    console.log(color);
    if (color) {
        try {
            let hsl_color = (0, hexToHsl_1.default)(color);
            let HSL = (0, isHsl_1.default)(hsl_color, true);
            let h, li, s;
            if (HSL instanceof Array) {
                [h, s, li] = HSL;
                h = parseInt(h);
                s = parseInt(s);
                li = parseInt(li);
                let batch;
                const result = yield (0, read_1.readById)("" + h + s + li);
                if (result) {
                    batch = result;
                    console.log("worked");
                }
                else {
                    batch = (0, generateBatche_1.default)({ h, s, li });
                    const preview = {
                        batch_id: "" + h + s + li,
                        hue: h,
                        saturation: s,
                        lightness: li,
                        preview: batch.colors.hsl.primary,
                        base: color,
                    };
                    (0, create_1.createPreview)(preview);
                    (0, create_1.createBatch)(batch);
                }
                res.status(200).json(batch);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({});
            }
        }
    }
    else {
        res.status(400).json({ error: "error happend" });
    }
});
exports.generator = generator;
