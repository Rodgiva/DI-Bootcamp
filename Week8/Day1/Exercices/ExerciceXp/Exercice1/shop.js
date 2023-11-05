const products = require('./product.js')

const search = (name) => {
    const finder = products.find((elem) => elem.name === name)
    if (finder == undefined) {
        return "Not found"
    }
    return finder
}

console.log(search('phone'));
console.log(search('shoes'));
console.log(search('tv'));
console.log(search('potatoe'));