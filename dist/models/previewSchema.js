"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const previewSchema = new mongoose_1.Schema({
    batch_id: {
        type: String,
        unique: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    hue: {
        type: Number,
        required: true,
    },
    saturation: {
        type: Number,
        required: true,
    },
    lightness: {
        type: Number,
        required: true,
    },
    preview: {
        type: Array,
        required: true,
    },
    base: {
        type: String,
        required: true,
    },
});
const previewModel = (0, mongoose_1.model)("Preview", previewSchema);
exports.default = previewModel;
