import {persons} from "./data.js"

const avgAge = () => {
    return Math.floor(persons.reduce((acc, val) => acc + val.age, 0) / persons.length)
}

console.log(avgAge());