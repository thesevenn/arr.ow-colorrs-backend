"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const randomNumber_1 = __importDefault(require("./randomNumber"));
function randomLightness(li) {
    let l = [];
    for (let i in constants_1.lightness) {
        // putting the lightness given in base color to shades
        if (constants_1.lightness[i][0] >= li && Math.abs(constants_1.lightness[i][0] - li) <= 9) {
            l.push(li);
            continue;
        }
        let index = (0, randomNumber_1.default)(constants_1.lightness[i].length);
        l.push(constants_1.lightness[i][index]);
        // console.log(lightness[i][index]);
    }
    // handling edge conditions of lightness
    if (li == 100) {
        l[l.length - 1] = 100;
    }
    else if (li == 0) {
        l[0] = 0;
    }
    return l;
}
exports.default = randomLightness;
