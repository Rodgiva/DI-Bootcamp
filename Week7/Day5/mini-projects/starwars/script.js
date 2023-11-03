// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1. Create your HTML file, and add the relevant elements.

// 2. In your JS file, create your functions :
//         to retrieve the elements from the DOM.
//         to get the data from the API (star wars characters).
//         to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3. Display the data using AJAX. Make sure to display a loading message as follows:
//     You can use any of these animation icons for the loading message.

const spinner = document.getElementById("spinner")
const btnSearch = document.getElementById("btn")
const nameCharacter = document.getElementById("name")
const height = document.getElementById("height")
const gender = document.getElementById("gender")
const birthYear = document.getElementById("birth-year")
const homeWorld = document.getElementById("home-world")
const h1Error = document.getElementById("error")

const h1 = document.getElementsByTagName("h1")
const p = document.getElementsByTagName("p")

spinner.style.display = "none"
h1Error.style.display = "none"

const spin = () => {
    let degSpinner = 0
    setInterval(() => {
        degSpinner += 45
        spinner.style.transform = `rotate(${degSpinner}deg)`
    },500)
}

const displayInfos = (data1, data2) => {
    spinner.style.display = "none"
    nameCharacter.textContent = data1.name
    height.textContent = `Height: ${data1.height}`
    gender.textContent = `Gender: ${data1.gender}`
    birthYear.textContent = `Birth year: ${data1.birthYear}`
    homeWorld.textContent = `Home world: ${data2}`
}

const displayLoading = () => {
    h1Error.style.display = "none"
    spinner.style.display = "block"
    h1[0].textContent = ""
    for (const i of p) {
        i.textContent = ""
    }
}

const error = (msg) => {
    spinner.style.display = "none"
    h1Error.style.display = "block"
    h1Error.textContent = msg
}

const search = async (e) => {
    e.preventDefault()

    displayLoading()
    const rand = Math.floor(Math.random() * 84)

    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${rand}`)
        if (res.status != 200) {
            throw new Error("Something went wrong")
        }
        else {
            const data = await res.json()
            const res2 = await fetch(data.result.properties.homeworld)
            
            if (res2.status != 200) {
                throw new Error("Something went wrong")
            }
            else {
                const data2 = await res2.json()
                displayInfos(data.result.properties, data2.result.properties.name)
            }
        }
    }
    catch (err) {
        console.log(err);
        error(err)
    }
}

spin()
btnSearch.addEventListener("click", search)
