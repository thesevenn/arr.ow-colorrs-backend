import isHsl from "../validations/isHsl";

// params =>  string containing hsl format and returns a value in rgb format
export default function hslToRgb(hsl: string): string {
	let parsed_color = isHsl(hsl, true);

	if (parsed_color instanceof Array) {
		// convert to fraction between 0-1
		let h: number = parseFloat(parsed_color[0]);
		let s: number = parseFloat(parsed_color[1]) / 100;
		let l: number = parseFloat(parsed_color[2]) / 100;

		let c = (1 - Math.abs(2 * l - 1)) * s;
		let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
		let m = l - c / 2;

		//  initialize r,g,b values
		let r: number = 0,
			g: number = 0,
			b: number = 0;

		// hue decides what values of red,green and blue will be depending on which  60° section of color wheel the hue lies.

		if ((h >= 0 && h < 60) || h == 360) {
			(r = c), (g = x), (b = 0);
		} else if (h >= 60 && h < 120) {
			(r = x), (g = c), (b = 0);
		} else if (h >= 120 && h < 180) {
			(r = 0), (g = c), (b = x);
		} else if (h >= 180 && h < 240) {
			(r = 0), (g = x), (b = c);
		} else if (h >= 240 && h < 300) {
			(r = x), (g = 0), (b = c);
		} else if (h >= 300 && h < 360) {
			(r = c), (g = 0), (b = x);
		}

		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);

		let rgb = `rgb(${r},${g},${b})`;
		return rgb;
	} else {
		throw new Error("Given string is not a valid HSL");
	}
}
