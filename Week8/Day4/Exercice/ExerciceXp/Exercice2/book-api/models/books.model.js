import db from "../config/db.js";

const _getAllBooks = () => {
  return db("book").select("id", "title", "author", "publishedyear");
};

const _getOneBook = (id) => {
  return db("book")
    .select("id", "title", "author", "publishedyear")
    .where({ id });
};

const _addBook = (title, author, publishedyear) => {
  return db("book").insert({ title, author, publishedyear });
};

export { _getAllBooks, _getOneBook, _addBook };