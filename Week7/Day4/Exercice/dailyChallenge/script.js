// Instructions

// 1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// 3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// 4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// 5. Allow the user to delete a specific gif by clicking the DELETE button.
// 6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const container = document.getElementById("container")

const searchGif = async (e) => {
    e.preventDefault()

    const tag = `q=${document.getElementById("tag").value}`
    // console.log(tag.value);

    const url = "https://api.giphy.com/v1/gifs/search?"
    const apiKey = "api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    const rating = "rating=g"
    const limit = "limit=1"

    try {
        const res = await fetch(`${url}${tag}&${rating}&${apiKey}`)
        if (res.status != 200) {
            throw new Error("Something went wrong")
        }
        else {
            let data = await res.json()

            const rand = Math.floor(Math.random()*data.data.length)

            const div = document.createElement("div")
            const embedElem = document.createElement("embed")
            const btnDelete = document.createElement("button")

            embedElem.src = data.data[rand].embed_url
            btnDelete.id = "deleteBtn"
            btnDelete.textContent = "delete"
            btnDelete.addEventListener("click", (e) => {
                e.target.parentElement.remove()
            })

            div.appendChild(embedElem)
            div.appendChild(btnDelete)
            container.appendChild(div)
        }
    }
    catch (err) {
        console.log(err);
    }
}

document.getElementById("btn").addEventListener("click", searchGif)

document.getElementById("deleteAll").addEventListener("click", () => {
    for (const element of container.children) {
        console.log(element);
        element.remove()
    }
    // I don't understand why every elements looped are not removed
})