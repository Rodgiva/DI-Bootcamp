const express = require("express")
const axios = require("axios");
const datas = require("./data/dataService.js")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
  console.log(`running on port 5000`);
});

// I am not sure I understood the exercise correctly.
app.get("/datas", (req, res) => {
    console.log(datas());
    res.status(200).json(datas)
    console.log("the data has been successfully retrieved");
})