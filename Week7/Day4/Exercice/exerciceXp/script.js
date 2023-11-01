// 🌟 Exercise 1 : Giphy API
// Instructions

// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

//     You will work with this part of the documention

//     You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Explanation of the Gif URL and the queries

//     q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

//     rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

//     api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// 1. Create a program to retrieve the data from the API URL provided above.
//     Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
//     Make sure to check the status of the Response and to catch any occuring errors.

// Output Example:
// https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%202/Exercise%20XP/Screenshot%20from%202020-06-14%2017-23-24.png

const retrieveData = () => {
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error("Searching categories error")
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))
}

// retrieveData()

// ****************************************

// 🌟 Exercise 2 : Giphy API
// Instructions

// 1. Read carefully the documention to understand all the possible queries that the URL accept.
// 2. Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//     Make sure to check the status of the Response and to catch any occuring errors.
// 3. Console.log the Javascript Object that you receive.

const retrieveData2 = () => {
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10")
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error("Searching categories error")
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err))
}

// retrieveData2()

// ****************************************

// 🌟 Exercise 3 : Async function
// Instructions

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// 1. Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
// 2. Make sure to check the status of the Response and to catch any occuring errors.


const afunc = async () => {
    try {
        const res = await fetch("https://www.swapi.tech/api/starships/9/")
        if (res.status != 200) {
            throw new Error("Something went wrong")
        }
        else {
            let data = await res.json()
            console.log(data.result.properties);
        }
    }
    catch (err) {
        console.log(err);
    }
}

// afunc()

// ****************************************


// 🌟 Exercise 4: Analyze
// Instructions

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// ==>
// calling
// resolved (after 2 seconds)