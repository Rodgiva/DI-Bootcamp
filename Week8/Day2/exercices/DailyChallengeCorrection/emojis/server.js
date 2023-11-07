import express from "express";
import dotenv from "dotenv"
import path from "path"
import router from "./routes/emojis.js";

dotenv.config()

const __dirname = path.resolve()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', express.static(__dirname + "/public"))

app.use("/emojis", router)

app.listen(process.env.PORT, () => {
    console.log(`Run on port ${process.env.PORT}`);
})