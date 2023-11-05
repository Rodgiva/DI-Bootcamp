// const axios = require('axios')
import axios from "axios";


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


export const getData = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // const data = await res.json()
        return res.data
    }
    catch (err) {
        console.log(err);
    }
}

export const hello = () => {
    console.log('hello');
}

// module.exports = {
//     getData,
// }
