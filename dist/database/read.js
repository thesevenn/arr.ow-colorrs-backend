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
exports.readByFilter = exports.readById = void 0;
const batchSchema_1 = __importDefault(require("../models/batchSchema"));
const batchSchema_2 = __importDefault(require("../models/batchSchema"));
const readById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield batchSchema_1.default.findOne({ id: id });
});
exports.readById = readById;
const readByFilter = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const items = options.batches || 15;
    const skip = (options.page - 1) * items;
    const filter = options.hue ? { hue: options.hue } : {};
    if ((yield batchSchema_2.default.countDocuments().exec()) > skip * items) {
        console.log("hello");
    }
    try {
        const response = yield batchSchema_2.default.find(filter).limit(items).skip(skip);
        if (response)
            return response;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
});
exports.readByFilter = readByFilter;
/*

1 page => 15*page 15,15=>,30
*/
