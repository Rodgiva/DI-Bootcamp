import express from "express";
import { getAllBooks, getOneBook, addBook } from "../controllers/books.controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.post("/", addBook)

export default router;
