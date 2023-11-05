// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// })

// *****************

// const getData = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await res.json()
//         return data
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// getData().then(data => console.log(data))

// *****************

// Node Module Systems

// const greeting = (name) => {
//     console.log(`Hello ${name}, welcome to NodeJS`);
// }

// const hello = (name) => {
//     console.log(`Hello ${name}`);
// }

// module.exports = {greeting, hello}

// *****************

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = getData