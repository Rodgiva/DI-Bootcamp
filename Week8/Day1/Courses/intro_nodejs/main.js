// const {greeting, hello} = require('./app.js')

// greeting('Bob');
// hello('Henry');

const getData = require('./app.js')

getData().then(data => console.log(data))