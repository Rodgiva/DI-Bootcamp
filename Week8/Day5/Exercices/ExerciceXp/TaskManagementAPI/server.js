import express from "express";
import post_router from "./routes/tasks.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log(`running on port ${3000}`);
});

app.use("/tasks", post_router);
