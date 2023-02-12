"use strict";
// TODO => a function which takes a hsl color format and return true or false
Object.defineProperty(exports, "__esModule", { value: true });
function isHsl(hsl) {
    // hsl(0,0,0) to hsl(360,100,100) or hsl(0 0 0) to hsl(360 100 100);
    const hsl_present = hsl.substring(0, 3).toLowerCase() === "hsl";
    let seperator = hsl.charAt(hsl.indexOf(",") || hsl.indexOf(" "));
    const hsl_array = hsl
        .substring(4, hsl.length - 1)
        .split(seperator);
    if (hsl_array.length === 3 && hsl_present) {
        return true;
    }
    return false;
}
exports.default = isHsl;
