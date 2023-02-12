import dotenv from "dotenv";
// making env vars loadable
dotenv.config();

import express from "express";
import cors from "cors";

import {PORT, MONGO_URI} from "./constants";
import MainRoutes from "./routes";
import connectToDb from "./database";
import rgbToHsl from "./utils/rgbToHsl";

const app = express();
app.use(cors({origin: "http://localhost:3000"}));

// if (MONGO_URI) connectToDb(MONGO_URI);
rgbToHsl("rgb(255,0,120)");
app.use("/v1", MainRoutes);

app.listen(PORT, () => {
	console.log("running at port:", PORT);
});
