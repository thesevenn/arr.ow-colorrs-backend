"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hslToRgb_1 = __importDefault(require("./hslToRgb"));
const rgbToHex_1 = __importDefault(require("./rgbToHex"));
const isHsl_1 = __importDefault(require("../validations/isHsl"));
//  params => a string containing hsl format and returns a vlaue in hex format
function hslToHex(hsl) {
    if ((0, isHsl_1.default)(hsl)) {
        let rgb = (0, hslToRgb_1.default)(hsl);
        let hex = (0, rgbToHex_1.default)(rgb);
        return hex;
    }
    else {
        throw new Error("Not a valid HSL value");
    }
}
exports.default = hslToHex;
