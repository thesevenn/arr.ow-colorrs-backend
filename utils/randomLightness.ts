import {lightness} from "../constants";
import randomNumber from "./randomNumber";

export default function randomLightness(li: number): Array<number> {
	let l: Array<number> = [];
	for (let i in lightness) {
		// putting the lightness given in base color to shades
		if (lightness[i][0] >= li && Math.abs(lightness[i][0] - li) <= 9) {
			l.push(li);
			continue;
		}
		let index = randomNumber(lightness[i].length);
		l.push(lightness[i][index]);
		// console.log(lightness[i][index]);
	}
	// handling edge conditions of lightness
	if (li == 100) {
		l[l.length - 1] = 100;
	} else if (li == 0) {
		l[0] = 0;
	}
	return l;
}
