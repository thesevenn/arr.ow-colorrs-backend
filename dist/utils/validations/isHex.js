"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isHex(hex) {
    // #000 to #fff or #000000 to #ffffff
    const hex_present = hex[0] === "#";
    if ((hex.length === 7 || hex.length === 4) && hex_present) {
        return true;
    }
    return false;
}
exports.default = isHex;
