import express from "express";
import dotenv from "dotenv";
import router from "./routes/questions.js";
import path from "path"
import cors from "cors";

dotenv.config();

const __dirname = path.resolve()
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(__dirname + "/public"))
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

// app.use("/", express.static(__dirname + "/public"));
