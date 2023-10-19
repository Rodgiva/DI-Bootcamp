// let adressNumber = "12"
// let adressStreet = "Ferroux"
// let country = "France"

// // let globalAdress = "I live in " + adressStreet + " " + adressNumber + ", in " + country
// let globalAdress = `I live in ${adressStreet} ${adressNumber}, in ${country}`

// console.log(globalAdress)

// ==================================================

// let birthYear = 1992
// let future = 2050
// let age = future - birthYear

// console.log();

// ==================================================

// let pets = ['cat','dog','fish','rabbit','cow']

// console.log(pets[1]);

// pets.push("horse")
// pets.splice(3, 1)

// console.log(pets.length);

// ==================================================

// let userAge = prompt("How old are you?")
// if (userAge < 18){
//     alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if (userAge == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else {
//     alert("Powering On. Enjoy the ride!");
// }

// ==================================================

let names= ["john", "sarah", 23, "Rudolf",34]

for(let name of names){
  // console.log(name);
  if (typeof name != "string"){
    continue    
  }
  if (name[0] !== name[0].toUpperCase()) {
    name = name[0].toLocaleUpperCase().concat(name.slice(1))
  }
  console.log(name);
}

for(let name of names){
  if (typeof name != "string"){
    break
  }
  console.log(name);

}