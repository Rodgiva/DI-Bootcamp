/*

// Part I

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.
let idTO = setTimeout(helloWorld, 2000)
function helloWorld() {
    alert("Hello world")
}

// Part II

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

let idTO2 = setTimeout(addParagraph, 2000);
let div = document.getElementById("container")

function addParagraph() {
    let p = document.createElement("p")
    p.textContent = "Hello World"

    div.appendChild(p)
}

// Part III

// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

const clearElem = document.getElementById("clear")

let idTI = setInterval(() => {
    let p = document.createElement("p")
    p.textContent = "Hello World"    
    div.appendChild(p)

    checkNbParagraph()
}, 2000);

clearElem.addEventListener("click", () => {
    clearInterval(idTI)
})

function checkNbParagraph() {
    const pElems = div.getElementsByTagName("p")
    if (pElems.length >= 5) {
        clearInterval(idTI)
    }
}

*/

// 🌟 Exercise 2 : Move the box
// Instructions

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// 1. Copy the code above, to a structured HTML file.
// 2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

let idTI
const containerElem = document.getElementById("container")
const animateElem = document.getElementById("animate")

function myMove() {
    let posLeft = 0
    idTI = setInterval(() => {
        posLeft += 1
        animateElem.style.left = posLeft+"px"
        if (posLeft >= 350) {
            clearInterval(idTI)
        }
    }, 1)
}