"use strict";
// TODO => a function which takes a hsl color format and return true or false
Object.defineProperty(exports, "__esModule", { value: true });
function isHsl(hsl, return_color = false) {
    // hsl(0,0,0) to hsl(360,100,100) or hsl(0 0 0) to hsl(360 100 100);
    const hsl_present = hsl.substring(0, 3).toLowerCase() === "hsl";
    let seperator = hsl.charAt(hsl.indexOf(",") || hsl.indexOf(" "));
    const hsl_array = hsl
        .substring(4, hsl.length - 1)
        .split(seperator);
    for (let i in hsl_array) {
        if (hsl_array[i].indexOf("%") > -1) {
            hsl_array[i] = hsl_array[i].substring(0, hsl_array[i].length - 1);
        }
    }
    if (hsl_array.length === 3 && hsl_present) {
        if (return_color) {
            return hsl_array;
        }
        return true;
    }
    return false;
}
exports.default = isHsl;
