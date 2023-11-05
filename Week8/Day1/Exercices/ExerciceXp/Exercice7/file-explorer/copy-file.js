const fs = require('fs')

const copyPasta = () => {
    const data = fs.readFileSync('source.txt', 'utf-8')
    fs.writeFile('destination.txt', data, (err) => {
        if(err) console.log(err);
    })
}
copyPasta()