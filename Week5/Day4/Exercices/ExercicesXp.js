
/*
// 🌟 Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1.Write code to remove “Greg” from the people array.
people.shift()

// 2.Write code to replace “James” to “Jason”.
people.slice(3, 1, "Jason")

// 3.Write code to add your name to the end of the people array.
people.push("Avigdor")

// 4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// 5.Write code to make a copy of the people array using the slice method.
//         The copy should NOT include “Mary” or your name.
//         Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//         Hint: Check out the documentation for the slice method
let copy = people.slice(1,people.length)
console.log(copy);

// 6.Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// There is no string with value "Foo" in the array

// 7.Create a variable called last which value is the last element of the array.
//     Hint: What is the relationship between the index of the last element in the array and the length of the array?
copy = people[people.length-1]

// Part II - Loops

// 1.Using a loop, iterate through the people array and console.log each person.
for (let person of people){
    console.log(person);
}

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//     Hint: take a look at the break statement in the lesson.
for (let person of people){
    console.log(person);
    if (person === "Devon") {
        break
    }
}

// ====================================================================

// 🌟 Exercise 2 : Your favorite colors
// Instructions

// 1. Create an array called colors where the value is a list of your five favorite colors.
const colors = ["red", "green", "blue", "yellow", "orange"]
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i in colors) {
    console.log(`My #${i} choice is ${colors[i]}`);
}
// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
const suffixes = ["st", "nd", "rd", "th"]
for (let i = 0; i < colors.length; i++) {
    let suffix;
    if (i < 3) {
        suffix = suffixes[i]
    }
    else {
        suffix = suffixes[3]
    }
    console.log(`My ${i+1}${suffix} choice is ${colors[i]}`);
}
//     Hint : create an array of suffixes to do the Bonus

// ====================================================================


// 🌟 Exercise 3 : Repeat the question
// Instructions

// 1. Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// 2. While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?
let ok = true
do {
    let userNb = prompt("Give me a number")
    if (isNaN(userNb)) {
        alert("This is not a number")
    }
    else if (userNb < 10) {
        alert("This number is smaller than 10, try again")
    }
    else {
        ok = false
    }
} while (ok)

// ====================================================================

// 🌟 Exercise 4 : Building Management
// Instructions:

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Review about objects

// 1. Copy and paste the above object to your Javascript file.
// 2. Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`The name of the second tenant is ${building.nameOfTenants[1]}, and there is ${building.numberOfRoomsAndRent["dan"][0]} rooms`);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sum = building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1]
if (sum > building.numberOfRoomsAndRent["dan"][1]){
    building.numberOfRoomsAndRent["dan"][1] += 1200
}

console.log(building.numberOfRoomsAndRent["dan"][1]);

// ====================================================================

// 🌟 Exercise 5 : Family
// Instructions

// 1. Create an object called family with a few key value pairs.
let family = {
    father : "Henry",
    mother : "Hilary",
    son : "Billy"
}
// 2. Using a for in loop, console.log the keys of the object.
for (item in family) {
    console.log(item);
}
// 3. Using a for in loop, console.log the values of the object.
for (item in family) {
    console.log(family[item]);
}

// ====================================================================


// Exercise 6 : Rudolf
// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = "";
for (item in details) {
    sentence += `${item} ${details[item]} `
}
console.log(sentence);

// ====================================================================
*/

// Exercise 7 : Secret Group
// Instructions

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
let orderNames = names.sort()
let societyName = ""
for (let name of orderNames) {
    societyName += name[0]
}
console.log(societyName);
// 2. Console.log the name of their secret society. The output should be “ABJKPS”
