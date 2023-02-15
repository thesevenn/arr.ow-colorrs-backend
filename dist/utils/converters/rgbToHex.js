"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isRgb_1 = __importDefault(require("../validations/isRgb"));
//  params => string containing rgb format color and returns a value in hex format
function rgbToHex(rgb) {
    let parsed_color = (0, isRgb_1.default)(rgb, true);
    if (parsed_color instanceof Array) {
        let r = (+parsed_color[0]).toString(16);
        let g = (+parsed_color[1]).toString(16);
        let b = (+parsed_color[2]).toString(16);
        if (r.length == 1) {
            r = "0" + r;
        }
        if (g.length == 1) {
            g = "0" + g;
        }
        if (b.length == 1) {
            b = "0" + b;
        }
        return `#${r}${g}${b}`;
    }
    else {
        throw new Error("Given string is not a valid RGB");
    }
}
exports.default = rgbToHex;
