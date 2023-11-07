import express from "express";

const router = express.Router();

// const books = [];

// Get all books

// Add a new book

// Update a book by ID

// Delete a book by 

const books = [
    {
        "id": 1,
        "content": "LOTR"
    },
    {
        "id": 2,
        "content": "HP"
    },
    {
        "id": 3,
        "content": "Ants"
    }
];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook)
  res.status(200)
});

// Update a book by ID
router.put("/:id", (req, res) => {
    const {id} = req.params
    const {content} = req.body
    const index = books.findIndex((item) => item.id == id)
    if (index === -1) {
        res.sendStatus(404)
    }
    else {
        books[index] = {...books[index], content: content}
        res.sendStatus(200)
    }
})

// Delete a book by ID
router.delete("/:id", (req, res) => {
    const {id} = req.params
    const index = books.findIndex((item) => item.id == id)
    if (index === -1) {
        res.sendStatus(404)
    }
    else {
        books.splice(index, 1)
        res.sendStatus(200)
    }
})

export default router;

