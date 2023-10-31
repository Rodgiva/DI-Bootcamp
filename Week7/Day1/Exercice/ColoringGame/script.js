const container = document.getElementById("container")
const colorPick = document.getElementById("colorPick")
const colors = document.getElementById("colors")
const grid = document.getElementById("grid")

let currentColor = "#ff0000"

// create color pick
for (let i = 0; i < 21; i++) {
    const div = document.createElement("div")
    div.classList.add(`color${i+1}`)
    colors.appendChild(div)
    // console.log(div);
    div.addEventListener("click", (e) => {
        console.log(e.currentTarget.style.backgroundColor);
    })
}

// create grid
for (let i = 0; i < 3600; i++) {
    const div = document.createElement("div")
    div.classList.add("cell")
    grid.appendChild(div)
    div.addEventListener("mousedown", (e) => {
        e.currentTarget.style.backgroundColor = currentColor
        console.log(e.currentTarget);
    })
}

const cssFileLoader = () => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    document.getElementsByTagName('HEAD')[0].appendChild(link);
}

cssFileLoader()