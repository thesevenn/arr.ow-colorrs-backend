"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
const constants_1 = require("../constants");
const isHsl_1 = __importDefault(require("../utils/validations/isHsl"));
const randomNumber_1 = __importDefault(require("../utils/randomNumber"));
const generateShades_1 = __importDefault(require("../utils/generateShades"));
const hexToHsl_1 = __importDefault(require("../utils/converters/hexToHsl"));
const hslToHex_1 = __importDefault(require("../utils/converters/hslToHex"));
const hslToRgb_1 = __importDefault(require("../utils/converters/hslToRgb"));
const create_1 = require("../database/create");
const read_1 = require("../database/read");
const generator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { color } = req.body;
    if (color) {
        try {
            let hsl_color = (0, hexToHsl_1.default)(color);
            let HSL = (0, isHsl_1.default)(hsl_color, true);
            let h, li, s;
            if (HSL instanceof Array) {
                [h, s, li] = HSL;
                h = parseInt(h);
                s = parseInt(s);
                li = parseInt(li);
                let batch;
                const result = yield (0, read_1.readById)("" + h + s + li);
                if (result) {
                    batch = result;
                    console.log("worked");
                }
                else {
                    //  selecting random lightness from different ranges
                    // lightness array => l
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
                    batch = {
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
                    (0, create_1.createBatch)(batch);
                }
                res.status(200).json(batch);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                res.status(500).json({});
            }
        }
    }
    else {
        res.status(400).json({ error: "error happend" });
    }
});
exports.generator = generator;
// const {color:string} = req.body; - done
// convert to hsl - done
// call the generate shades function with lightness array (l) as parameter to generate the array of shades of primary color.
//  Then call same function for Neutral color where hue is same but saturation is b/w 0-5 and lightness is same,
// then find a appropriate accent color and check if red ,green and yellow can be added as accent colors if yes generate the colors if no skip it.
// then convert the shades to hex and rgbs and have a array of hsl(), hex(),rgb() color foramt for all colors that is Primary + Neutral + Main accent + 3 secondary accents = 1+1+1+3=6  colors
/*
max shades = 6 and
min shades = 6-1 = 5
*/
/*

create a id based on hsl => h+s+l
shape of data to be sent :

{
    data{
        createdAT:Date.now(),
        hue:"",
        saturation:"",
        lightness:"",
        id:"2389736"
        colors:{
          hsl:{
            primary:[],
            neutral:[],
            accent:{
                main:[],
                red:[],
                green:[],
                yellow:[]

            },
            hex:{

            },
            rgb:{

            }
        },

    }
}
}

*/
//  TODO => take a color as input check for the type by looking at prefix (#,hsl,rgb) or ask for the foramt in request
// 2 => convert hex and rgb to hsl then
// 3 => now generate the shades for base color using the hue and saturation = 100% and lightness is decided by certain condition.
// 4=> then do the same thing for neutral and 4 accent colors then convert them to hex and rgbs and send as response as a arrays of hsl,hex,rgb
//  saturation for neutral colors will be between 0-5
// main accent color will be complementary to the base color hue.
// accent colors are => one main accent color => based on base hue
// red green and yellow. if base hue is same as any of the three then that one is skipped.
/*
possible lightness =>
first lightness is taken from the color provided in request param
10,11,12
18,19,20
27,28,29
41,42,43
52,53,54
64,65,66
71,72
75
90,91,92
96,97,98,99
*/
// randomly select lightnes from above and save them in an array. then use that array to fill in the lightness for the hsl
/*
{
                    createdAt: Date.now(),
                    _id: "" + h + s + li,
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
                }

*/
