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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBatches = void 0;
const read_1 = require("../database/read");
const listBatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { hue, batches, page } = req.query;
    const result = yield (0, read_1.readByFilter)({ hue, batches, page: page || 1 });
    if (result) {
        res.status(200).json({
            total: result.batches.length,
            status: "success",
            page: page,
            left: result.batches_left,
            batches: result.batches,
        });
    }
});
exports.listBatches = listBatches;
