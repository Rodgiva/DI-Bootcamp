// 🌟 Exercise 1 : HTML Form
// Instructions

// Hint : Read about sending form data using the HTTP protocol

// form

// 1. Create a form like the one above. The form should contain three inputs:
//         a small text input asking for a name,
//         a larger textarea input to write a message,
//         a submit input (“Send”)

// 2. When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)

// 3. Where will the sent data appear?
// ==> in the url

// **********************************

// 🌟 Exercise 2 : HTML Form #2
// Instructions

// 1. Use the same form structure as Exercise 1.
// 2. When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// 3. Where will the sent data appear? Hint : Look at the Network Tab
// ==> in the response of the request

// **********************************

// 🌟 Exercise 3 : JSON Mario
// Instructions

// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// 1. Convert this JS object into a JSON object. What happens to the nested objects ?
let jsonMarioGame = JSON.stringify(marioGame)
console.log(jsonMarioGame);
// ==> the every keys, included nested, becomes strings

// 2. Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
jsonMarioGame = JSON.stringify(marioGame, null, 4)
console.log(jsonMarioGame);

// 3. Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.