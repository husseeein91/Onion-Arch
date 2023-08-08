import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    methods: "GET,POST,PUT,DELETE,PATCH",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "server is working",
  });
});

// app.use('/api/v1', api);

export default { app, Router };
