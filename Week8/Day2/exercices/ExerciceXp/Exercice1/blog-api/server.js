const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log(`running on port 5000`);
});

const blogs = [
  {
    id: 0,
    title: "title1",
    content: "Blabla",
  },
  {
    id: 1,
    title: "title2",
    content: "Blablabla",
  },
  {
    id: 2,
    title: "title3",
    content: "Blablablablablabla",
  },
];

// get all
app.get("/posts", (req, res) => {
  res.send(blogs);
});

// get by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const blog = blogs.find((item) => (item.id = id));
  if (!blog) {
    return res.status(404).json({ message: "Product Not Found" });
  }
  res.send(blog);
});

// add
app.post("/posts", (req, res) => {
  const newBlog = { id: blogs.length + 1, ...req.body };
  blogs.push(newBlog);
  res.status(201).json(blogs);
});

// update
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const indexBlog = blogs.findIndex((item) => item.id == id);
  blogs[indexBlog] = req.body;
  res.status(201).json(blogs);
});

// delete
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const indexBlog = blogs.findIndex((item) => item.id == id);
  blogs.splice(indexBlog, 1);
  res.status(201).json(blogs);
});

// handle invalid routes
app.delete("*", (req, res) => {
    res.json("<h1>Invalid route</h1>")
});


