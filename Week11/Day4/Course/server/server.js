import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import u_router from "./routes/users.router.js";
import p_router from "./routes/products.router.js";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`Run on ${process.env.PORT || 3001}`);
});

app.use("/users", u_router);
app.use("/products", p_router);

// create table users (
//     id serial primary key,
//     email varchar(255) not null unique,
//     password varchar (100) not null,
// )
