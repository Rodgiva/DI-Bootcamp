const {add, multiply} = require('./math.js')
const lodash = require('lodash')

console.log(add(5,3));
console.log(lodash.add(5,3));

console.log(multiply(6,7));
console.log(lodash.multiply(6,7));
