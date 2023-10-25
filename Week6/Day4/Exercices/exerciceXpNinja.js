/*

// Exercise 1 : Dog age to Human years
// Instructions

// Using the following data

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

console.log(data.filter(val => val.type == "dog").map(val => val.age).reduce((acc, val) => acc + val));

// 1. Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years
// 2. Using the reduce() method, find the sum of the dogs’ ages in human years.

// *************************************

// Exercise 2 : Email
// Instructions

// 1. Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

let userMail = userEmail3.trim()
console.log(userMail);

// *************************************

// Exercise 3 : Employees #3
// Instructions

// Using this array

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.

anotherUsers = users.map(user => {
    let anUser = {}
    anUser[user.firstName + " " + user.lastName] = user.role
    return anUser
});

console.log(anotherUsers);

// *************************************

*/

// Exercise 4 : Array to Object
// Instructions

// Using this array 
const letters = ['x', 'y', 'z', 'z'];

let dups = {}

// 1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
letters.forEach(element => {
    if (dups[element]) {
        dups[element] += 1
    }
    else {
        dups[element] = 1
    }
});

console.log(dups);

// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
let dups2 = letters.reduce((acc, val) => {
    acc + val
})

console.log(dups2);