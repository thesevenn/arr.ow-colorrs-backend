import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";
import isHsl from "../validations/isHsl";

//  params => a string containing hsl format and returns a vlaue in hex format

export default function hslToHex(hsl: string): string {
	if (isHsl(hsl)) {
		let rgb = hslToRgb(hsl);
		let hex = rgbToHex(rgb);
		return hex;
	} else {
		throw new Error("Not a valid HSL value");
	}
}
