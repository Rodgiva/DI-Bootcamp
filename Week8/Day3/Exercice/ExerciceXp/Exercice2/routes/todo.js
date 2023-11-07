import express from "express";

const router = express.Router();

const todos = [
    {
        "id": 1,
        "content": "play"
    },
    {
        "id": 2,
        "content": "read"
    },
    {
        "id": 3,
        "content": "work"
    },
    {
        "id": 4,
        "content": "sleep"
    }
];

// Get all to-do items
router.get("/", (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post("/", (req, res) => {
  const newTodo = { id: todos.length + 1, ...req.body };
  todos.push(newTodo)
  res.status(200)
});

// Update a to-do item by ID
router.put("/:id", (req, res) => {
    const {id} = req.params
    const {content} = req.body
    const index = todos.findIndex((item) => item.id == id)
    if (index === -1) {
        res.sendStatus(404)
    }
    else {
        todos[index] = {...todos[index], content: content}
        res.sendStatus(200)
    }
})

// Delete a to-do item by ID
router.delete("/:id", (req, res) => {
    const {id} = req.params
    const index = todos.findIndex((item) => item.id == id)
    if (index === -1) {
        res.sendStatus(404)
    }
    else {
        todos.splice(index, 1)
        res.sendStatus(200)
    }
})

export default router;
