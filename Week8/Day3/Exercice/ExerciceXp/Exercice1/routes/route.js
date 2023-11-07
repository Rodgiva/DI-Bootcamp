import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    console.log("homepage");
    res.send("homepage")
})

router.get('/about', (req, res) => {
    console.log("about");
    res.send("about")
})

export default router