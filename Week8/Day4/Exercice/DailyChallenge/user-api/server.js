import express from "express";
import dotenv from "dotenv";
import user_router from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/user", user_router);
