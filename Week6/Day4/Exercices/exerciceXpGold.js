/*

// Exercise 1 : Analyzing the map method
// Instructions

// Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
// ==> [2, 4, 6]

// *********************************

// Exercise 2: Analyzing the reduce method
// Instructions

// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// ==> [1, 2, 0, 1, 2, 3]

// *********************************

// Exercise 3 : Analyze this code
// Instructions

// Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// What is the value of i ?
// ==> i: 0, 1, 2, 3, 4, 5
// *********************************


// Exercise 4 : Nested arrays
// Instructions

// 1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
//     Bonus Try to do it on one line.
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat().flat());

// 2. Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
console.log(
  greeting.map((element) => element.reduce((acc, val) => acc + " " + val))
);

// 3. Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
console.log(greeting.toString().replaceAll(",", " "));

// 4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log([trapped.toString()]);

// *********************************
*/

// Exercise 1: Sum elements
// Instructions

// 1. Write a JavaScript program to find the sum of all elements in an array.
const nbs = [10, 5, 6, 17, 7];
console.log(nbs.reduce((acc, val) => acc + val));

// *********************************

// Exercise 2 : Remove Duplicates
// Instructions

// 1. Write a JavaScript program to remove duplicate items in an array.
const dupArr = [6, 6, 8, 7, 8, 5, 6, 2];
let removeDuplicate = (arr) => arr.filter((val, i) => arr.indexOf(val) == i);
console.log(removeDuplicate(dupArr));

// *********************************

// Exercise 3 : Remove certain values
// Instructions

// 1. Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

const sampleArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
const filterRef = [null, 0, "", false, undefined]
console.log(
  sampleArr.filter(element => !filterRef.includes(element) && !isNaN(element))
);

// *********************************

// Exercise 4 : Repeat please !
// Instructions

// 1. Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:

let repeat = (word, n) => {
    let res = ""
    for (let i = 0; i < n; i++) {
        res += word
    }
    return res
}

console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

// *********************************

// Exercise 5 : Turtle & Rabbit

// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// 1. Line up the Turtle and the Rabbit at the start line.
//     Expected Output:

//         When you write:

//         console.log(startLine);
//         console.log(turtle);
//         console.log(rabbit);

//         It should look like this:

//         '     ||<- Start line'
//         '       🐢'
//         '       🐇'

const startIndex = startLine.indexOf("<")
turtle = turtle.padStart(startIndex)
rabbit = rabbit.padStart(startIndex)

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// 2. What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
//  ==> '🐢========='