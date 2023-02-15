"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateShades(h, s, l) {
    // shades generation
    let shades = [];
    for (let i in l) {
        let shade = `hsl(${h},${s}%,${l[i]}%)`;
        shades.push(shade);
    }
    return shades;
}
exports.default = generateShades;
