"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// making env vars loadable
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./constants");
const routes_1 = __importDefault(require("./routes"));
const rgbToHsl_1 = __importDefault(require("./utils/rgbToHsl"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
// if (MONGO_URI) connectToDb(MONGO_URI);
(0, rgbToHsl_1.default)("rgb(255,0,120)");
app.use("/v1", routes_1.default);
app.listen(constants_1.PORT, () => {
    console.log("running at port:", constants_1.PORT);
});
