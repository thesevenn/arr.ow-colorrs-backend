"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightness = exports.CLIENT_ORIGIN = exports.MONGO_URI = exports.PORT = void 0;
const l = __importStar(require("./lightness"));
exports.PORT = process.env.PORT;
exports.MONGO_URI = process.env.MONGO_URI;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;
// lightness from ./lightness
exports.lightness = [
    l.l_100,
    l.l_200,
    l.l_300,
    l.l_400,
    l.l_500,
    l.l_600,
    l.l_700,
    l.l_800,
    l.l_900,
    l.l_950,
];
