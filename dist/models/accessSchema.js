"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accessSchema = new mongoose_1.Schema({
    client_id: {
        type: String,
        require: true,
    },
    api_key: {
        type: String,
        require: true,
    },
});
