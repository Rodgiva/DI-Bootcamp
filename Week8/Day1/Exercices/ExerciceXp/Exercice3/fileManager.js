import * as fs from 'fs';

export const readFile = async (fileName) => {
    const data = fs.readFileSync(fileName, 'utf-8')
    return data
}

export const writeFile = (fileName, content) => {
    fs.writeFile(fileName, content, (err) => {
        if(err) console.log(err);
    })
}