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
const database_1 = __importDefault(require("./database"));
const logger_1 = require("./utils/logger");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "http://localhost:3000", methods: "POST ,GET" }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (constants_1.MONGO_URI)
    (0, database_1.default)(constants_1.MONGO_URI);
app.use(logger_1.logger);
app.use("/v1", routes_1.default);
app.listen(constants_1.PORT, () => {
    console.log("Server listening requests at => http://localhost:" + constants_1.PORT);
});
