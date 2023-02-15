"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log("request made at:", req.originalUrl + ", method:" + req.method);
    next();
};
exports.logger = logger;
