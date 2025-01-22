// import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables

// let connection;

// export const createConnection = async () => {
//     if (!connection) {
//         connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASS,
//             database: process.env.DB_NAME,
//         });
//     }
//     return connection;
// };

import mongoose from "mongoose";

const connectMongo = async () => {
	try {
		if (mongoose.connection.readyState >= 1) {
			return;
		}
		await mongoose.connect(
			"mongodb+srv://ayanshah:Ayanshah1@cluster0.mbko8eo.mongodb.net/SD"

			
		);
		console.log("Connected to MongoDB...");
	} catch (error) {
		console.error("MongoDB connection error:", error);
		throw new Error("Failed to connect to MongoDB");
	}
};

export default connectMongo;
