import express from 'express'
import dotenv from 'dotenv'
import post_router from './routes/posts.routes.js'

dotenv.config()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log(`running on port ${3000}`);
});

app.use("/posts", post_router);