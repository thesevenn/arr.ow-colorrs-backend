import isRgb from "./validations/isRgb";

// TODO => a function to convert rgb color format to hsl
//  params => a string containing rgb fornat and returns a value in hsl format
export default function rgbToHsl(rgb: string) {
	let parsed_color = isRgb(rgb, true);
	if (parsed_color instanceof Array && parsed_color.length > 1) {
		let r = parseFloat(parsed_color[0]) / 255;
		let g = parseFloat(parsed_color[1]) / 255;
		let b = parseFloat(parsed_color[2]) / 255;

		// calculating min and max channels out of of rgb
		let cmin: number = Math.min(r, g, b);
		let cmax: number = Math.max(r, g, b);
		let delta: number = cmax - cmin;

		// initialize h,s,l values
		let h: number = 0,
			s: number = 0,
			l: number = 0;

		//  hue is determined by cmax channel or hue is 0 difference of cmax and cmin is 0

		// calculating hue
		// no difference cmax-cmin =0
		if (delta == 0.0) {
			h = 0;
		}
		// cmax is red
		else if (cmax == r) {
			h = ((g - b) / delta) % 6;
		}
		// cmax is green
		else if (cmax == g) {
			h = (b - r) / delta + 2;
		}
		// cmax is blue
		else if (cmax == b) {
			h = (r - g) / delta + 4;
		}

		h = Math.round(h * 60);

		// make negative hues positive by turning them behind 360° => h+360°
		if (h < 0) {
			h += 360;
		}
		console.log(h);

		// calculation of lightness
	} else {
		throw new Error("Given string is not a valid RGB");
	}
}
