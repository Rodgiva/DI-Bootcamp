let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for (const planet of planets) {
    let div = document.createElement("div")
    div.classList.add("planet", planet)
    document.getElementsByClassName("listPlanets")[0].appendChild(div)
}

document.getElementsByClassName("Mercury")[0].style.backgroundColor = "yellow"
let venus = document.getElementsByClassName("Venus")[0].style.backgroundColor = "orange"
let earth = document.getElementsByClassName("Earth")[0].style.backgroundColor = "blue"
let mars = document.getElementsByClassName("Mars")[0].style.backgroundColor = "red"
let jupiter = document.getElementsByClassName("Jupiter")[0].style.backgroundColor = "yellow"
let saturn = document.getElementsByClassName("Saturn")[0].style.backgroundColor = "green"
let uranus = document.getElementsByClassName("Uranus")[0].style.backgroundColor = "purple"
let neptune = document.getElementsByClassName("Neptune")[0].style.backgroundColor = "pink"

mercury.style.ba