export default function isHex(hex: string): boolean | Array<string> {
	// #000 to #fff or #000000 to #ffffff

	const hex_present: boolean = hex[0] === "#";
	if ((hex.length === 7 || hex.length === 4) && hex_present) {
		return true;
	}
	return false;
}
