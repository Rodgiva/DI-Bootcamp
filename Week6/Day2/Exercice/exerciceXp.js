/*

// 🌟 Exercise 1 : Change the article
// Instructions

// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day,
//     thanks to its unique, rich, and sweet taste.</p>
//     <p> But what effect does eating chocolate have on our health?</p>
// </article>

// 1. Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.getElementsByTagName("h1")[0];
console.log(h1.textContent);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.getElementsByTagName("article")[0];
const lastChaild = article.lastElementChild.remove();

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const pArr = document.getElementsByTagName("p");
let btn = document.createElement("button");
btn.textContent = "Click";
article.appendChild(btn);

btn.addEventListener("click", () => {
  for (const p of pArr) {
    p.style.fontWeight = "bold";
  }
});

// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener("mouseover", () => {
  let randNb = Math.floor(Math.random() * 100);
  h1.style.fontSize = randNb + "px";
});

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const secondP = pArr[1];
secondP.addEventListener("mouseover", () => {
  secondP.style.opacity = 0;
  secondP.style.visibility = "hidden";
  secondP.style.transition = "visibility 0s 2s, opacity 2s linear";
});

// *****************************************************


// 🌟 Exercise 2 : Work with forms
// Instructions

// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form>
// <ul class="usersAnswer"></ul>

// 1. Retrieve the form and console.log it.
const form = document.getElementsByTagName("form")[0];
console.log(form);

// 2. Retrieve the inputs by their id and console.log them.
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

console.log(fname);
console.log(lname);

// 3. Retrieve the inputs by their name attribute and console.log them.
const fname2 = document.getElementsByName("firstname")[0];
const lname2 = document.getElementsByName("lastname")[0];

console.log(fname2);
console.log(lname2);

// 4. When the user submits the form (ie. submit event listener)
//         use event.preventDefault(), why ?
//         get the values of the input tags,
//         make sure that they are not empty,
//         create an li per input value,
//         then append them to a the <ul class="usersAnswer"></ul>, below the form.

const btn = document.getElementById("submit");
let usersAnswer = document.getElementsByClassName("usersAnswer")[0]
btn.addEventListener("click", (e) => {
    e.preventDefault()
    // we use this to not refresh the page when the submit button is clicked
    if (fname.value != "" && lname.value != "") {
        for (const input of form) {
            if(input.id != "submit") {
                let label = input.previousElementSibling.previousElementSibling.textContent
                let val = input.value
                console.log(`${label} ${val}`);

                let li = document.createElement("li")

                li.textContent = `${label} ${val}`
                usersAnswer.appendChild(li)
            }
        }
    }
})

// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>


// *****************************************************

// 🌟 Exercise 3 : Transform the sentence
// Instructions

// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// 1. Declare a global variable named allBoldItems.
let allBoldItems = []

// 2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    let bolds = document.getElementsByTagName("strong")
    for (const bold of bolds) {
        allBoldItems.push(bold)
    }
}

getBoldItems()

// 3. Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (const item of allBoldItems) {
        item.style.color = "blue"
    }
}

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    for (const item of allBoldItems) {
        item.style.color = "black"
    }
}

// 5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

const p = document.getElementsByTagName("p")[0]
p.addEventListener("mouseover", highlight)
p.addEventListener("mouseout", returnItemsToDefault)

// *****************************************************

*/ 

// 🌟 Exercice 4 : Volume of a sphere
// Instructions

// 1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const radiusElem = document.getElementById("radius")
const volumeElem = document.getElementById("volume")
const btn = document.getElementById("submit")

function calculate(e) {
    e.preventDefault()
    if (radiusElem.value != "") {
        let radius = radiusElem.value
        let volume = (4/3)*Math.PI*Math.pow(radius, 3)
        volumeElem.value = volume
    }
}

btn.addEventListener("click", calculate)