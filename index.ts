import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/", router);

app.listen(port, function () {
	console.log(`App is listening on port ${port} !`);
});
