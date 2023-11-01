

// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

// https://api.chucknorris.io/jokes/random?category={category}

// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/

// Make sure to check the Response status and throw an error accordingly


const getChuckNorrisJokes = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error("Wrong category")
        }
    })
    .then((obj) => {
        console.log(obj.value);
    })
    .catch((err) => console.log(err))
}

// getChuckNorrisJokes()

const getChuckNorrisJokes2 = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error("Searching categories error")
        }
    })
    .then((obj) => {
        let url = "https://api.chucknorris.io/jokes/random?category="
        const rand = Math.floor(Math.random()*obj.length)
        url += obj[rand]
        return url
    })
    .then((url) => {
        fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error("Wrong category")
            }
        })
        .then((obj) => {
            console.log(obj.value);
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

getChuckNorrisJokes2()
