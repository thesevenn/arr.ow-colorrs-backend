import * as l from "./lightness";

export const PORT: string | undefined = process.env.PORT;
export const MONGO_URI: string | undefined = process.env.MONGO_URI;
export const CLIENT_ORIGIN: string | undefined = process.env.CLIENT_ORIGIN;

// lightness from ./lightness
export const lightness: Array<number>[] = [
	l.l_100,
	l.l_200,
	l.l_300,
	l.l_400,
	l.l_500,
	l.l_600,
	l.l_700,
	l.l_800,
	l.l_900,
	l.l_950,
];
