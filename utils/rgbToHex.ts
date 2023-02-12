import isRgb from "./validations/isRgb";

//  params => string containing rgb format color and returns a value in hex format

export default function rgbToHex(rgb: string): string {
	let parsed_color = isRgb(rgb, true);
	if (parsed_color instanceof Array) {
		let r = (+parsed_color[0]).toString(16);
		let g = (+parsed_color[1]).toString(16);
		let b = (+parsed_color[2]).toString(16);

		if (r.length == 1) {
			r = "0" + r;
		}
		if (g.length == 1) {
			g = "0" + g;
		}
		if (b.length == 1) {
			b = "0" + b;
		}

		return `#${r}${g}${b}`;
	} else {
		throw new Error("Given string is not a valid RGB");
	}
}
