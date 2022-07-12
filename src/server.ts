import "reflect-metadata";
import 'dotenv/config'
import express from "express";

import { AppDataSource } from "./database/config/AppDataSource";

const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(3000, () => console.log("Server is running!"))