import isHex from "./validations/isHex";

//  params => a string containing hex foramt color and returns a value in rgb format

export default function hexToRgb(hex: string): string {
	let parsed_color = isHex(hex);
	let r = 0,
		g = 0,
		b = 0;
	if (parsed_color) {
		if (parsed_color.length == 3) {
			r = parseInt("0x" + parsed_color[0] + parsed_color[0]);
			g = parseInt("0x" + parsed_color[1] + parsed_color[1]);
			b = parseInt("0x" + parsed_color[2] + parsed_color[2]);
		} else if (parsed_color.length == 6) {
			r = parseInt("0x" + parsed_color[0] + parsed_color[1]);
			g = parseInt("0x" + parsed_color[2] + parsed_color[3]);
			b = parseInt("0x" + parsed_color[4] + parsed_color[5]);
		}
		return `rgb(${r},${g},${b})`;
	} else {
		throw new Error("Given string is not a valid Hex");
	}
}
