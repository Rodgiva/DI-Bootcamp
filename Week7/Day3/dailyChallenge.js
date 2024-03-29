/*

// Instructions
// 1rst daily challenge

// 1. Create two functions. Each function should return a promise.
// 2. The first function called makeAllCaps(), takes an array of words as an argument
//         If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//         else, reject the promise with a reason.
// 3. The second function called sortWords(), takes an array of words uppercased as an argument
//         If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//         else, reject the promise with a reason.

const makeAllCaps = (arr) => {
    return new Promise((res, rej) => {
        if (arr.every(elem => typeof elem == "string")) {
            res(arr.map(elem => elem.toUpperCase()))
        }
        else {
            rej("Not all the words in the array are strings")
        }
    })
}

const sortWords = (arr) => {
    return new Promise((res, rej) => {
        if (arr.length > 4) {
            res(arr.sort())
        }
        else {
            rej("Then length of the array is smaller or equal to 4")
        }
    })
}

// Test:

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

// **************************************

*/

// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// 1. Create three functions. The two first functions should return a promise..

// 2. The first function is named toJs():
//         this function converts the morse json string provided above to a morse javascript object.
//         if the morse javascript object is empty, throw an error (use reject)
//         else return the morse javascript object (use resolve)

// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//         This function asks the user for a word or a sentence.
//         if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//         else return an array with the morse translation of the user’s word.

//         if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//         if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//         this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// 5. Chain the three functions.

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

const toJs = () => {
  return new Promise((res, rej) => {
    if (morse !== "{}") {
      let morseObj = JSON.parse(morse);
      res(morseObj);
    } else {
      rej("The object is empty");
    }
  });
};

const toMorse = (morseJs) => {
  return new Promise((res, rej) => {
    let userWord = prompt("Give me a word");
    let translated = [];

    morseJs.then((result) => {
      for (const char of userWord) {
        if (
          Object.keys(result).find((element) => element === char) != undefined
        ) {
          translated.push(result[char]);
        } else {
          rej(
            `The character ${char} doesn't exist in the morse javascript object`
          );
          return;
        }
      }
      res(translated);
    });
  });
};

const joinWords = (morseTranslation) => {
  const div = document.createElement("div");
  morseTranslation.then((result) => {
    text = result.reduce((acc, val) => acc + "<br/>" + val);
    div.innerHTML = text;
    div.style.fontSize = "32px";
    document.body.appendChild(div);
  });
};

joinWords(toMorse(toJs()));

// I didnt found how to chain the functions, since toMorse() is called from joinWords() parameters, and toJs() is called from toMorse() parameters
// The problem is that every finctions return a different Promise
