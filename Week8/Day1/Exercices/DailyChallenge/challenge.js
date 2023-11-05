const greeting = require("./greeting.js")
const colorfulMessage = require("./colorful-message.js")
const readFile = require("./files/read-file.js")

console.log(greeting.greet("Bob"));
colorfulMessage()
readFile()