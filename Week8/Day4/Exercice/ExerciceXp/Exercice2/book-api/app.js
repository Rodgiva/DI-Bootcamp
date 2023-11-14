import express from 'express'
import dotenv from 'dotenv'
import books_router from './routes/books.routes.js'

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/books", books_router);