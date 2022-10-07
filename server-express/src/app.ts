// app.ts
import cors from "cors";
import express, { Request, Response } from "express";
import logger from "morgan";
import apiRouter from "./routes/api";

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:13001" }));
app.use(apiRouter);

export default app;
