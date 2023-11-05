// const {getData} = require('./app.js')
import { getData, hello } from "./app.js";


getData()
.then(data => console.log(data))
.then(hello)

