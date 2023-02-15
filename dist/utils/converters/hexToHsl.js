"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isHex_1 = __importDefault(require("../validations/isHex"));
const hexToRgb_1 = __importDefault(require("./hexToRgb"));
const rgbToHsl_1 = __importDefault(require("./rgbToHsl"));
//  params -=> a string containing hex format and returns a vlaue in hsl format
function hexToHsl(hex) {
    if ((0, isHex_1.default)(hex)) {
        let rgb = (0, hexToRgb_1.default)(hex);
        let hsl = (0, rgbToHsl_1.default)(rgb);
        return hsl;
    }
    else {
        throw new Error("Given string is not a valid Hex");
    }
}
exports.default = hexToHsl;
