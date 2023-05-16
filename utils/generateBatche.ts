import generateShades from "./generateShades";
import hslToHex from "./converters/hslToHex";
import hslToRgb from "./converters/hslToRgb";
import {Batch} from "../constants/types/batch";
import randomLightness from "./randomLightness";

export default function generateBatches(options: {
	h: number;
	s: number;
	li: number;
}): Batch {
	const {h, s, li} = options;
	let l: Array<number> = randomLightness(li);

	// shade for nutral color b/w 0-5
	let random_s = Math.floor(Math.random() * 5);

	//  generating shades for primary color =>
	let primary_hsl: Array<string> = generateShades(h, s, l);

	// generating shades for neutral color =>
	let neutral_hsl: Array<string> = generateShades(h, random_s, l);

	// primary accenet color generation =>
	let accent_hsl: Array<string> = [];
	accent_hsl = generateShades(h - 180, s, l);
	// secondary accenet colors generation =>
	let red_hsl: Array<string> = [],
		green_hsl: Array<string> = [],
		yellow_hsl: Array<string> = [];

	if (!((h >= 0 && h < 25) || (h >= 348 && h <= 360))) {
		// 0 -20

		red_hsl = generateShades(360, s, l);
	}
	if (!(h > 61 && h < 148)) {
		// 52 - 62
		green_hsl = generateShades(140, s, l);
	}
	if (!(h >= 45 && h <= 60)) {
		// 105 - `142
		yellow_hsl = generateShades(55, s, l);
	}
	// hex arrays
	let primary_hex: Array<string> = [],
		neutral_hex: Array<string> = [],
		accent_hex: Array<string> = [],
		red_hex: Array<string> = [],
		green_hex: Array<string> = [],
		yellow_hex: Array<string> = [];

	// rgb arrays
	let primary_rgb: Array<string> = [],
		neutral_rgb: Array<string> = [],
		accent_rgb: Array<string> = [],
		red_rgb: Array<string> = [],
		green_rgb: Array<string> = [],
		yellow_rgb: Array<string> = [];

	for (let i in primary_hsl) {
		primary_hex.push(hslToHex(primary_hsl[i]));
		neutral_hex.push(hslToHex(neutral_hsl[i]));
		if (accent_hsl.length) accent_hex.push(hslToHex(accent_hsl[i]));
		if (red_hsl.length) red_hex.push(hslToHex(red_hsl[i]));
		if (green_hsl.length) green_hex.push(hslToHex(green_hsl[i]));
		if (yellow_hsl.length) yellow_hex.push(hslToHex(yellow_hsl[i]));

		primary_rgb.push(hslToRgb(primary_hsl[i]));
		neutral_rgb.push(hslToRgb(neutral_hsl[i]));
		if (accent_hsl.length) accent_rgb.push(hslToRgb(accent_hsl[i]));
		if (red_hsl.length) red_rgb.push(hslToRgb(red_hsl[i]));
		if (green_hsl.length) green_rgb.push(hslToRgb(green_hsl[i]));
		if (yellow_hsl.length) yellow_rgb.push(hslToRgb(yellow_hsl[i]));
	}

	const batch: Batch = {
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
