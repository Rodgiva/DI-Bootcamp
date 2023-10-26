(() => {
    const containerElem = document.getElementById("container")
    for (let i = 1; i <= 9; i++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")

        containerElem.appendChild(cell)
    }

    
})()