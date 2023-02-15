import {Request, Response, NextFunction} from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
	console.log("request made at:", req.originalUrl + ", method:" + req.method);
	next();
};
