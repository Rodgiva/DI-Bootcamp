const express = require("express");
const { users } = require("./config/db.js");
const users_router = require("./routes/users.routes.js")
require("dotenv").config()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3001, () => {
    console.log(`Running on port ${process.env.PORT || 3001}`);
})

const logger = (req, res, next) => {
    console.log("url=> ", req.url);
    console.log("params=> ", req.params);
    console.log("method=> ", req.method);
    next()
}

const auth = (req, res, next) => {
    const {admin} = req.query;
    if (admin == "Bob") {
        req.user = {name: "admin", id:1}
        next()
    }
    else {
        res.send("Not authorized")
    }
}

app.use(logger)

app.get("/about", auth, (req, res) => {
    console.log(req.user);
    res.send("About page")
})

app.use("/api/users", users_router)
