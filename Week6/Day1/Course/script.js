let div = document.getElementById("container")
div = document.querySelector("#container")

let allUl = document.querySelectorAll("ul")
for (const i of allUl) {
    console.log(i.firstElementChild);
}

console.log("**********************");

for (const i of allUl) {
    let listLi = i.getElementsByTagName("li")
    for (const j of listLi) {
        console.log(j);
    }
}