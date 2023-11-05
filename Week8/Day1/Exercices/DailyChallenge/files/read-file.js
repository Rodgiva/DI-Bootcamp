const fs = require('fs')

const displayData = () => {
    const data = fs.readFileSync('file-data.txt', 'utf-8')
    console.log(data);
}

module.exports = displayData