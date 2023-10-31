// 🌟 Exercise 1 : Comparison
// Instructions

// 1. Create a function called compareToTen(num) that takes a number as an argument.
// 2. The function should return a Promise:
//         the promise resolves if the argument is less than or equal to 10
//         the promise rejects if argument is greater than 10.

// Test:

/*
const compareToTen = (num) => {
    return new Promise((res, rej) => {
        if (num <= 10) {
            res(true)
        }
        else {
            rej(false)
        }
    })
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
  // *********************************************
  
  //   🌟 Exercise 2 : Promises
  // Instructions
  
  // 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.
  
  let aPromise = new Promise((res, rej) => {
      setTimeout(() => {
          res("success")
        }, 4000)
    })
    
    aPromise.then(res => console.log(res))
    
    
    // *********************************************
    
    // 🌟 Exercise 3 : Resolve & Reject
    // Instructions
    
    // 1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
    Promise.resolve(3).then(res => console.log(res))
    // 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
    Promise.reject("Boo!").catch(rej => console.log(rej))
    
*/

// *********************************************

// Exercise 4: quizz - not mandatory

// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.