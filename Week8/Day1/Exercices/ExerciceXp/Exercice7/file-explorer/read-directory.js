const fs = require('fs')

const list = fs.readdirSync('../file-explorer')

list.forEach(element => {
    console.log(element);
});