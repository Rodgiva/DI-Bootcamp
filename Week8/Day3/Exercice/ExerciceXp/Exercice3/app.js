import express from "express";
import dotenv from "dotenv"
import router from "./routes/books.js"

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
})

// app.use("/", express.static(__dirname + "/public"));