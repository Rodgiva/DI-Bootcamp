const curriedSum = (a) => (b) => a + b

// Exercise 1 : Merge Words
// Instructions

// 1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'

const mergeWords = (a) => () =>  {
    show = () => {
        console.log(a);
    }
    show()
}
mergeWords('Hello')()

// 2. When the function is called without any arguments return a string where all words have been merged into a sentence.
// const mergeWords2 = (a) => {
//     return (b) => {
//         if (b == undefined) {
//             return a
//         }
//         return mergeWords2(`${a} ${b}`)
//     }
// };

const mergeWords2 = (a) => () => a + mergeWords2(a)
console.log(mergeWords2('There')('is')('no')('spoon.')())

// 3. Below is a verbose JavaScript solution, turn this into a currying function.

