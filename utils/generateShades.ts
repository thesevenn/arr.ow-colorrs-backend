export default function generateShades(
	h: number,
	s: number,
	l: Array<number>
): Array<string> {
	// shades generation
	let shades: Array<string> = [];
	for (let i in l) {
		let shade: string = `hsl(${h},${s}%,${l[i]}%)`;
		shades.push(shade);
	}
	return shades;
}
