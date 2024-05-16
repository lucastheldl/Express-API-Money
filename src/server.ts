import express from "express";
import { connectToDb } from "./database/connectDB";

const app = express();
app.use(express.json);
connectToDb();

app.get("/home", (req, res) => {
  res.status(200).send({ hello: "hello" });
});

app.listen(8080, () => {
  console.log("http server running 🚀");
});
