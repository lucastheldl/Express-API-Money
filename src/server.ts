import express, { request } from "express";
import cors from "cors";
import { connectToDb } from "./database/connectDB";
import { router } from "./routes/router";

const app = express();
connectToDb();
app.use(express.urlencoded({ extended: false }));

app.use(cors({ origin: "null" }));

app.use(express.json());

app.use(router);

app.listen(8080, () => {
  console.log("http server running 🚀");
});
