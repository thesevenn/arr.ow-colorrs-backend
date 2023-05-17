import dotenv from "dotenv";
// making env vars loadable
dotenv.config();

import express, {Request, Response} from "express";
import cors from "cors";

import {PORT, MONGO_URI, CLIENT_ORIGIN} from "./constants";
import MainRoutes from "./routes";
import connectToDb from "./database";
import {logger} from "./utils/logger";

const app: express.Application = express();

app.use(cors({origin: CLIENT_ORIGIN, methods: "POST ,GET"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (MONGO_URI) connectToDb(MONGO_URI);

app.use(logger);
app.use("/v1", MainRoutes);

app.listen(PORT, () => {
	console.log("Server listening requests at => http://localhost:" + PORT);
});
