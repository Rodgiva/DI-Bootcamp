import {
  _getAllBooks,
  _getOneBook,
  _addBook
} from "../models/books.model.js";

const getAllBooks = async (req, res) => {
  try {
    const data = await _getAllBooks();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No books" });
  }
};

const getOneBook = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await _getOneBook(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No book" });
  }
};

const addBook = async (req, res) => {
  const {  title, author, publishedYear  } = req.body;
  try {
    const data = await _addBook( title, author, publishedYear );
    // res.json(data);
    res.status(200).json({ msg: "Added successfuly" });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not add a book" });
  }
};

export { getAllBooks, getOneBook, addBook};