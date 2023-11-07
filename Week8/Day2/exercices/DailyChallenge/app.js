/*

// https://www.npmjs.com/package/emojis-list
const emojis = require('emojis-list')
const express = require("express")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const getRandEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)]
}

const emojisArr = [
    {
        name: "Bob",
        emoji: getRandEmoji()
    },
    {
        name: "Henry",
        emoji: getRandEmoji()
    },
    {
        name: "Charlie",
        emoji: getRandEmoji()
    },
    {
        name: "Mickey",
        emoji: getRandEmoji()
    },
    {
        name: "Hubert",
        emoji: getRandEmoji()
    },
    {
        name: "Lulu",
        emoji: getRandEmoji()
    },
]

const {name, emoji} = emojisArr[Math.floor(Math.random() * emojisArr.length)]
console.log(name, emoji);

// ************************************************

*/

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const emojisArr = [
  {
    name: "Bob",
    emoji: "😀",
  },
  {
    name: "Henry",
    emoji: "🙃",
  },
  {
    name: "Charlie",
    emoji: "😊",
  },
  {
    name: "Mickey",
    emoji: "🤨",
  },
  {
    name: "Hubert",
    emoji: "☹️",
  },
  {
    name: "Lulu",
    emoji: "😎",
  },
];

const getRandomEmoji = () => {
  const rand = Math.floor(Math.random() * emojisArr.length);
  const { name, emoji } = emojisArr[rand];
  return {name, emoji}
};

console.log(getRandomEmoji());