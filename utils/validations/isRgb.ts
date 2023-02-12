export default function isRgb(
	rgb: string,
	return_array: boolean = false
): boolean | Array<string> {
	//  rgb(255,255,255), rgb(0,0,0);

	// check for rgb at start of string
	const rgb_present: boolean = rgb.substring(0, 3).toLowerCase() === "rgb";
	// find the appropriate seperator present in string => works with both " ", \,
	let seperator: string = rgb.charAt(rgb.indexOf(",") || rgb.indexOf(" "));
	// get the array of correct sequence of r,g,b
	const rbg_array: Array<string> = rgb
		.substring(4, rgb.length - 1)
		.split(seperator);
	let flag: boolean = false;
	if (rbg_array.length < 3) return false;

	for (let i = 0; i < rbg_array.length; i++) {
		if (parseInt(rbg_array[i]) >= 0 && parseInt(rbg_array[i]) <= 255) {
			flag = true;
		} else flag = false;
	}
	if (flag && rgb_present) {
		if (return_array) {
			return rbg_array;
		} else return true;
	}

	return false;
}
