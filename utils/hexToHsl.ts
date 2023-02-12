import isHex from "./validations/isHex";
import hexToRgb from "./hexToRgb";
import rgbToHsl from "./rgbToHsl";

//  params -=> a string containing hex format and returns a vlaue in hsl format
export default function hexToHsl(hex: string): string {
	if (isHex(hex)) {
		let rgb = hexToRgb(hex);
		let hsl = rgbToHsl(rgb);
		return hsl;
	} else {
		throw new Error("Given string is not a valid Hex");
	}
}
