import cors from "cors";
import express from "express";
import { configDotenv } from "dotenv";
import { connectDatabase } from "./database";
import { authRouter, foodCategoryRouter, foodOrderRouter, foodRouter } from "./routers";

const app = express();

configDotenv();
connectDatabase();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter);
app.use("/food-category", foodCategoryRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
