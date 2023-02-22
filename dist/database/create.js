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
exports.createPreview = exports.createBatch = exports.createAccess = void 0;
const accessSchema_1 = __importDefault(require("../models/accessSchema"));
const batchSchema_1 = __importDefault(require("../models/batchSchema"));
const previewSchema_1 = __importDefault(require("../models/previewSchema"));
const createAccess = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = {
        client_id: "3gghdfg3jdffe",
        api_key: "dfje33fnr3404nfd",
        isValid: true,
        createdAt: Date.now(),
    };
    accessSchema_1.default.create(client);
});
exports.createAccess = createAccess;
const createBatch = (batch) => __awaiter(void 0, void 0, void 0, function* () {
    const newBatch = new batchSchema_1.default(batch);
    batchSchema_1.default
        .create(newBatch)
        .then(() => console.log("added to console"))
        .catch(error => console.log(error.message));
});
exports.createBatch = createBatch;
const createPreview = (preview) => __awaiter(void 0, void 0, void 0, function* () {
    const newPreview = new previewSchema_1.default(preview);
    previewSchema_1.default
        .create(newPreview)
        .then(() => console.log("preview created"))
        .catch(err => console.log(err.message));
});
exports.createPreview = createPreview;
