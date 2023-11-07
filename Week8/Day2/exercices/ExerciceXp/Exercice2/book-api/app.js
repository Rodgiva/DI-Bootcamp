const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log(`running on port 5000`);
});

const books = [
  {
    id: 0,
    title: "lotr",
    author: "Tolkien",
    publishedYear: 1954,
  },
  {
    id: 1,
    title: "hp",
    author: "Rowling",
    publishedYear: 1997,
  },
  {
    id: 2,
    title: "the ants",
    author: "Werber",
    publishedYear: 1992,
  },
];

// Read all
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Read
app.get("/api/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const book = books.find((item) => (item.id == bookId));
  if (!book) {
    res.status(404).json("Book not found");
  }
  else {
    res.status(200).json(book);
  }
});

// Create
app.post("/api/books", (req, res) => {
    const newBook = {id: books.length+1, ...req.body}
    books.push(newBook)
    res.status(201).json(newBook);
})
