"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateShades_1 = __importDefault(require("./generateShades"));
const hslToHex_1 = __importDefault(require("./converters/hslToHex"));
const hslToRgb_1 = __importDefault(require("./converters/hslToRgb"));
const randomLightness_1 = __importDefault(require("./randomLightness"));
function generateBatches(options) {
    const { h, s, li } = options;
    let l = (0, randomLightness_1.default)(li);
    console.log(...l, li);
    // shade for nutral color b/w 0-5
    let random_s = Math.floor(Math.random() * 5);
    //  generating shades for primary color =>
    let primary_hsl = (0, generateShades_1.default)(h, s, l);
    // generating shades for neutral color =>
    let neutral_hsl = (0, generateShades_1.default)(h, random_s, l);
    // primary accenet color generation =>
    let accent_hsl = [];
    accent_hsl = (0, generateShades_1.default)(h - 180, s, l);
    // secondary accenet colors generation =>
    let red_hsl = [], green_hsl = [], yellow_hsl = [];
    if (h) {
        red_hsl = (0, generateShades_1.default)(360, s, l);
    }
    if (h) {
        green_hsl = (0, generateShades_1.default)(140, s, l);
    }
    if (h) {
        yellow_hsl = (0, generateShades_1.default)(55, s, l);
    }
    // hex arrays
    let primary_hex = [], neutral_hex = [], accent_hex = [], red_hex = [], green_hex = [], yellow_hex = [];
    // rgb arrays
    let primary_rgb = [], neutral_rgb = [], accent_rgb = [], red_rgb = [], green_rgb = [], yellow_rgb = [];
    for (let i in primary_hsl) {
        primary_hex.push((0, hslToHex_1.default)(primary_hsl[i]));
        neutral_hex.push((0, hslToHex_1.default)(neutral_hsl[i]));
        // if (accent_hsl) accent_hex.push(hslToHex(accent_hsl[i]));
        if (red_hsl)
            red_hex.push((0, hslToHex_1.default)(red_hsl[i]));
        if (green_hsl)
            green_hex.push((0, hslToHex_1.default)(green_hsl[i]));
        if (yellow_hsl)
            yellow_hex.push((0, hslToHex_1.default)(yellow_hsl[i]));
        primary_rgb.push((0, hslToRgb_1.default)(primary_hsl[i]));
        neutral_rgb.push((0, hslToRgb_1.default)(neutral_hsl[i]));
        // if (accent_hsl) accent_rgb.push(hslToRgb(accent_hsl[i]));
        if (red_hsl)
            red_rgb.push((0, hslToRgb_1.default)(red_hsl[i]));
        if (green_hsl)
            green_rgb.push((0, hslToRgb_1.default)(green_hsl[i]));
        if (yellow_hsl)
            yellow_rgb.push((0, hslToRgb_1.default)(yellow_hsl[i]));
    }
    const batch = {
        createdAt: Date.now(),
        id: "" + h + s + li,
        hue: h,
        saturation: s,
        lightness: li,
        colors: {
            hsl: {
                primary: primary_hsl,
                neutral: neutral_hsl,
                accent: accent_hsl,
                red: red_hsl,
                green: green_hsl,
                yellow: yellow_hsl,
            },
            hex: {
                primary: primary_hex,
                neutral: neutral_hex,
                accent: accent_hex,
                red: red_hex,
                green: green_hex,
                yellow: yellow_hex,
            },
            rgb: {
                primary: primary_rgb,
                neutral: neutral_rgb,
                accent: accent_rgb,
                red: red_rgb,
                green: green_rgb,
                yellow: yellow_rgb,
            },
        },
    };
    return batch;
}
exports.default = generateBatches;
/*
    let l: Array<number> = [];
    for (let i in lightness) {
        // putting the lightness given in base color to shades
        if (lightness[i][0] >= li && Math.abs(lightness[i][0] - li) <= 9) {
            l.push(li);
            continue;
        }
        let index = randomNumber(lightness[i].length);
        l.push(lightness[i][index]);
        // console.log(lightness[i][index]);
    }
    // handling edge conditions of lightness
    if (li == 100) {
        l[l.length - 1] = 100;
    } else if (li == 0) {
        l[0] = 0;
    }
    */
