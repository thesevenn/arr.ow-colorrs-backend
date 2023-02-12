"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRgb(rgb, return_color = false) {
    //  rgb(255,255,255), rgb(0,0,0);
    // check for rgb at start of string
    const rgb_present = rgb.substring(0, 3).toLowerCase() === "rgb";
    // find the appropriate seperator present in string => works with both " ", \,
    let seperator = rgb.charAt(rgb.indexOf(",") || rgb.indexOf(" "));
    // get the array of correct sequence of r,g,b
    const rbg_array = rgb
        .substring(4, rgb.length - 1)
        .split(seperator);
    let flag = false;
    if (rbg_array.length < 3)
        return false;
    for (let i = 0; i < rbg_array.length; i++) {
        if (parseInt(rbg_array[i]) >= 0 && parseInt(rbg_array[i]) <= 255) {
            flag = true;
        }
        else
            flag = false;
    }
    if (flag && rgb_present) {
        if (return_color) {
            return rbg_array;
        }
        else
            return true;
    }
    return false;
}
exports.default = isRgb;
