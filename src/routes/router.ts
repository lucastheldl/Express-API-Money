import express from "express";

export const router = express();

router.get("/home", (req, res) => {
  res.status(200).send({ hello: "hello" });
});
