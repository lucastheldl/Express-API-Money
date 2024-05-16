import express from "express";

const app = express();

app.get("/home", (req, res) => {
  res.status(200).send({ hello: "hello" });
});

app.listen(8080, () => {
  console.log("http server running 🚀");
});
