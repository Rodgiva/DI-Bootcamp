// Instructions
// Part 1 : Quote generator

// 1. Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

// 2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 2 ect…

// 3. Populate the array with a few quotes that you like.

// 4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
//     Important: When clicking on the button, make sure you don’t display the same quote twice in a row.


const quoteObjects = [
    {
        id: 0,
        author: "Gandalf",
        quote: "A Wizard Is Never Late, Frodo Baggins. Nor Is He Early. He Arrives Precisely When He Means To."
    },
    {
        id: 1,
        author: "Aragorn",
        quote: 'If by My Life or Death, I Can Protect You, I Will. You Have My Sword.'
    },
    {
        id: 2,
        author: "Legolas",
        quote: "And You Have My Bow."
    },
    {
        id: 3,
        author: "Gimli",
        quote: "And my axe!"
    },
]

let quote = ""

const searchQuote = () => {
    let randId = Math.floor(Math.random()*4)
    let newquote = quoteObjects.filter((val) => val.id == randId)[0].quote
    if (newquote == quote) {
        searchQuote()
    }
    else {
        quote = newquote
        document.getElementsByTagName("p")[0].textContent = quote
    }
}

document.getElementById("btn").addEventListener("click", searchQuote)

