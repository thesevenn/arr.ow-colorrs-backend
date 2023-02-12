import mongoose from "mongoose";

export default async function connectToDb(mongo_uri: string) {
	try {
		// as per warning for depricated setQuery
		mongoose.set("strictQuery", false);
		const connect = await mongoose.connect(mongo_uri);
		if (connect) {
			console.log("Connected to database host:", connect.connection.host);
		} else throw new Error("Cannot start connection!!");
	} catch (error) {
		if (error instanceof Error) console.log("Error occured", error.message);
	}
}
