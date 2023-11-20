import express from "express";
import hello_router from "./routes/hello.routes.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3030, () => {
  console.log(`running on port ${3030}`);
});

app.use("/api", hello_router);
