import "reflect-metadata";
import 'dotenv/config'
import express from "express";
import "./database/data-source"

const app = express();

app.listen(3000, () => console.log("Server is running!"))