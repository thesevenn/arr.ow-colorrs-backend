export interface Batch {
	id: string;
	createdAt: number;
	hue: number;
	saturation: number;
	lightness: number;
	colors: {
		hsl: color;
		hex: color;
		rgb: color;
	};
}

type color = {
	primary: Array<string>;
	neutral: Array<string>;
	accent: Array<string>;
	red?: Array<string>;
	green?: Array<string>;
	yellow?: Array<string>;
};
