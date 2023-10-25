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

*/

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
