// TODO => a function which takes a hsl color format and return true or false

export default function isHsl(hsl: string): boolean | Array<string> {
	// hsl(0,0,0) to hsl(360,100,100) or hsl(0 0 0) to hsl(360 100 100);

	const hsl_present: boolean = hsl.substring(0, 3).toLowerCase() === "hsl";
	let seperator: string = hsl.charAt(hsl.indexOf(",") || hsl.indexOf(" "));
	const hsl_array: Array<string> = hsl
		.substring(4, hsl.length - 1)
		.split(seperator);

	if (hsl_array.length === 3 && hsl_present) {
		return true;
	}
	return false;
}
