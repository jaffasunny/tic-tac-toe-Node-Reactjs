import express from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
	const { firstName, lastName, username, password } = req.body;

	//Random ID generator
	const userId = uuidv4();

	// Hasing password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Creating Token to identify authenticated User
	const token = serverClient.createToken(userId);

	res.json({ token, userId, firstName, lastName, username, hashedPassword });
});

app.post("/login");

app.listen(3001, () => {
	console.log("Server is running on port 3001");
});
