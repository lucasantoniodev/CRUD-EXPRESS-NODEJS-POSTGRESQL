import "reflect-metadata";
import 'dotenv/config'
import express from "express";
import "./database/data-source"
import { routes } from "./routes/routes";


const app = express();

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log("Server is running!"))