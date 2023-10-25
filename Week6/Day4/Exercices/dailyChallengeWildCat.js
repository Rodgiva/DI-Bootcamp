// Using this array:

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
const usernames = []

gameInfo.forEach(element => {
    usernames.push(element.username)
});

console.log(usernames);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :
// const winners = ["becky", "susy"]
const usernames2 = []
gameInfo.forEach(element => {
    if (element.score > 5) {
        usernames2.push(element.username)
    }
});

console.log(usernames2);

// 3. Find and display the total score of the users. (Hint: The total score is 71)
let sum = gameInfo.map(val => val.score).reduce((acc, val) => acc + val)
console.log(sum);