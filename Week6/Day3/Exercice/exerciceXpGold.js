/*
// Exercise 1 : Nested functions

// 1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

let landscape = function() {
    
    let result = "";
    
    let flat = function(x) {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }
    
    let mountain = function(x) {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

// landscape()

// ==> the function landscape() will return "____/''''\____"
// 2. Change the code below to nested arrow functions.

let landscape2 = () => {
    
    let result = "";
    
    let flat = (x) => {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }
    
    let mountain = (x) => {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
        result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

// landscape2()

// ***************************************

// Exercise 2 : Closure
// Instructions

// 1. Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);
// ==> it will return 13

// ***************************************

// Exercise 3 : Currying
// Instructions

// 1. Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// ==> it will return 31

// ***************************************

// Exercise 4 : Currying

// 1. Analyse the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// ==> it will return 17

// ***************************************

*/

// Exercise 5 : Composing

// 1. Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => {
    console.log(num);
    return num + 1
};
const add5 = (num) => {
    console.log(num);
    return num + 5
};
compose(add1, add5)(10)

// ==> it will return an error...?
// after used that code on console, I don't understand how add1 and add5 return a value without parameters