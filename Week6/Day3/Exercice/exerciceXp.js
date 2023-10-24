/*

// 🌟 Exercise 1 : Scope
// Instructions

// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file. Explain your predictions.

// ****************************
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ==> invalid assignment to const 'a': because const can't be reassigned

// ****************************
//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // a = 0
funcTwo() // a = 5
funcThree() // a = 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ==> invalid assignment to const 'a': because const can't be reassigned

// ****************************
//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

// ==> a = "hello"

// ****************************
//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix()
// => a = "test"

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// ==> if we declare
//      let a and const a (in order): redeclaration of let a
//      const a and let a (in order): redeclaration of let a
//      const a and const a (in order): redeclaration of let a
// because const can't be reassigned

// ****************************
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// ==> if we declare the const a before the if condition, the code will run: because in the if condition, the scope is not the same


// ****************************************************

// 🌟 Exercise 2 : Ternary operator
// Instructions

// Using the code below:

// function winBattle(){
//     return true;
// }

// 1. Transform the winBattle() function to an arrow function.
let winBattle = () => {
    return true;
}
// 2. Create a variable called experiencePoints.
let experiencePoints;
// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints  = winBattle() ? 10 : 1;
// 4. Console.log the experiencePoints variable.
console.log(experiencePoints);

// ****************************************************


// 🌟 Exercise 3 : Is it a string ?
// Instructions

// 1. Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output

const isString = (val) => {
    if (typeof val == "string") {
        return true
    }
    return false
}
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// ****************************************************

// 🌟 Exercise 4 : Find the sum
// Instructions

// 1. Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
console.log(((a, b) => a+b)(5,6));

// ****************************************************

// 🌟 Exercise 5 : Kg and grams
// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
function weightConverter(val) { return val*1000}
// 2. Then, use function expression and invoke it.
const weightConverter = function(val) { return val*1000}
// 3. Write in a one line comment, the difference between function declaration and function expression.
// ==> the function expression is an anonymous function stored in a variable, also the function declaration is executed before any other code, the function expression is loaded and executed when the interpreter reach the function
// 4. Finally, use a one line arrow function and invoke it.
console.log(((val)=> val*1000)(5));

// ****************************************************

// 🌟 Exercise 6 : Fortune teller
// Instructions

// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

((nbChildren, partName, geoLocation, jobTitle) => {
    const sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${nbChildren} kids.`
    const p = document.createElement("p")
    p.textContent = sentence
    document.body.appendChild(p)
})(3, "Loïs", "here", "dev")

// ****************************************************

// 🌟 Exercise 7 : Welcome
// Instructions

// John has just signed in to your website and you want to welcome him.

// 1. Create a Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.
((name) => {
    const navbar = document.getElementById("navbar")
    const div = document.createElement("div")
    const a = document.createElement("a")
    const img = document.createElement("img")

    a.textContent = name
    img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/SNice.svg"

    div.appendChild(a)
    div.appendChild(img)
    navbar.appendChild(div)
})("Bob")

*/

// ****************************************************

// 🌟 Exercise 8 : Juice Bar
// Instructions

// You will use nested functions, to open a new juice bar.
// Part I:

// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

const sizes = ["small", "medium", "large"]
const size = sizes[Math.floor(Math.random()*3)]

const makeJuice = (size) => {
    const addIngredients = (ingr1, ingr2, ingr3) => {
        const sentence = `The client wants a ${size} juice, containing ${ingr1}, ${ingr2}, ${ingr3}`
        const p = document.createElement("p")

        p.textContent = sentence

        document.body.appendChild(p)
    }

    addIngredients("orange", "carot", "papaya")
}

makeJuice(size)

// Part II:

// 1. In the makeJuice function, create an empty array named ingredients.

// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

const makeJuice2 = (size) => {
    let incredients = []
    const addIngredients = (ingr1, ingr2, ingr3) => {
        incredients.push(ingr1).push(ingr2).push(ingr3)
    }

    addIngredients("orange", "carot", "papaya")
    addIngredients("orange", "carot", "papaya")

    const displayJuice = () => {
        const sentence = `The client wants a ${size} juice, containing ${incredients[0]}, ${incredients[1]}, ${incredients[2]}`
        const p = document.createElement("p")
        
        p.textContent = sentence
        
        document.body.appendChild(p)
    }
    displayJuice()
}

makeJuice2(size)

// I am not sure to understand well the last exercice