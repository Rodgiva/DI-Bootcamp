// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// let myObjEntries = Object.entries(myObj)
// console.log(myObjEntries);

// myObjEntries.forEach((element, i) => {
//     console.log(`The ${i+1}# key is: ${element[0]}\nThe ${i+1}# value is: ${element[1]}`);
// });


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(`Type of killerabbit: ${killerRabbit.type}`);
console.log(`Type of blackRabbit: ${blackRabbit.type}`);

blackRabbit.speak("My name is Inigo Montoya, you killed my father, prepare to die.")
killerRabbit.speak("???")