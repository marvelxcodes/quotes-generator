import type { Response, Request } from "express";
import express from "express";
import cors from "cors";
import Quotes, { QuoteType } from "./quotes";

const App = express();
const PORT: number = Number(process.env.PORT) || 4000;

App.use(
	cors({
		origin: "*",
		credentials: true,
		methods: ["GET"],
	})
);

App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.get("/", (req: Request, res: Response) => {
	const randomQuote: QuoteType =
		Quotes[Math.floor(Math.random() * Quotes.length)];
	res.json(randomQuote);
});

App.get("*", (req: Request, res: Response) => {
	res
		.status(404)
		.send(`<hi>Please send GET Request on <code> / </code> route!</hi>`);
});

App.listen(PORT, () => {
	console.log(`Quotes API is listening on port : ${PORT}!`);
});
