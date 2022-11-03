import express from "express";
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
import {connect} from "./config/db.js"

dotenv.config()
const app = express();

connect();
app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(process.env.PORT, () => console.log("Server is running"))