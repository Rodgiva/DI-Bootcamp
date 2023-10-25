// const numbers = [10,11,12,15,20]
// numbers.forEach(nb => {
//     if (nb%2 == 0) {
//         console.log(nb);
//     }
// });


// const words = ["wow", "hey", "bye"]
// console.log(words.some((val) => { val[0] == "h" }));
// console.log(words.every((val) => { val[0] == "h" }));


let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
]

let sum = party.filter(item => item["desert"] != 'Apple Pie').map(obj => obj.calories).reduce((acc, val) => acc + val)

console.log(sum);