// const fs = require('fs')

// console.log('before');

// // const data = fs.readFileSync('users', 'utf-8')
// // console.log(data);

// fs.readFile('users', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     console.log(data);
// })

// console.log('after');

// ******************************

// let users = [
//     {username: 'Bob', pass:'123456'},
//     {username: 'Henry', pass:'987654'},
// ]

// fs.writeFile('info.json', JSON.stringify(users), (err) => {
//     if(err) console.log(err);
// })

// ******************************

const fs = require('fs').promises;

const getfiles = async () => {
    const data = await fs.readFile('info.json', 'utf-8')
    console.log(data);
}

getfiles()