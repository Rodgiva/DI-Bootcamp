// Instructions

// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// 1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.

// *******************************
// I found some sentences but it doesn't match 100% with the form inputs of the exercice
// *******************************

const nounElem = document.getElementById("noun")
const adjectiveElem = document.getElementById("adjective")
// const personElem = document.getElementById("person")
const verbElem = document.getElementById("verb")
// const placeElem = document.getElementById("place")
const btn = document.getElementById("lib-button")
const storyElem = document.getElementById("story")

const sentence1 = "Today I went to the zoo. I saw a (adjective) (noun) jumping up and down in its tree. He (verb) (adverb) through the large tunnel that led to its (adjective) (noun). I got some peanuts and passed them through the cage to a gigantic gray (noun) towering above my head. Feeding that animal made me hungry. I went to get a (adjective) scoop of ice cream. It filled my stomach. Afterwards I had to (verb) (adverb) to catch our bus. When I got home I (verb) my mom for a (adjective) day at the zoo."

const sentence2 = "Today, my fabulous camp group went to a (adjective) amusement park. It was a fun park with lots of cool  (noun) and enjoyable play structures. When we got there, my kind counselor shouted loudly, \"Everybody off the (noun).\" We all pushed out in a terrible hurry. My counselor handed out yellow tickets, and we scurried in. I was so excited! I couldn't figure out what exciting thing to do first. I saw a scary roller coaster I really liked so, I (adverb) ran over to get in the long line that had about (number) people in it. When I finally got on the roller coaster I was (verb). In fact I was so nervous my two knees were knocking together. This was the (adjective)est ride I had ever been on! In about two minutes I heard the crank and grinding of the gears. That’s when the ride began! When I got to the bottom, I was a little (verb) but I was proud of myself. The rest of the day went (adverb). It was a (adjective) day at the fun park."

const sentence3 = "I walk through the color jungle. I take out my (adjective) canteen. There's a (adjective) parrot with a (adjective) (noun) in his mouth right there in front of me in the (adjective) trees! I gaze at his (adjective) (noun). A sudden sound awakes me from my daydream! A panther’s (verb) in front of my head! I (verb) his (adjective) breath. I remember I have a packet of (noun) that makes go into a deep slumber! I (verb)it away from me in front of the (noun).Yes he's eating it! I (verb) away through the (adjective) jungle. I meet my parents at the tent. Phew! It’s been an exciting day in the jungle."

const sentences = [sentence1, sentence2, sentence3]

let sentence = ""

function shuffle() {
    sentence = sentences[Math.floor(Math.random() * 3)]
    storyElem.textContent = ""
}

shuffle()

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (nounElem.value != ""
    && adjectiveElem.value != ""
    // && personElem.value != ""
    // && placeElem.value != ""
    && verbElem.value != "") {
        sentence = sentence.replaceAll("(noun)", nounElem.value).replaceAll("(adjective)", adjectiveElem.value).replaceAll("(verb)", verbElem.value)
        storyElem.textContent = sentence
    }
})

// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

const shuffleBtn = document.createElement("button")
const refreshBtn = document.createElement("button")
const brElem = document.createElement("br")

shuffleBtn.textContent = "Shuffle"
refreshBtn.textContent = "Refresh"
shuffleBtn.addEventListener("click", () => {
    shuffle()
    alert("The sentence has been shuffled")
})
refreshBtn.addEventListener("click", () => {
    nounElem.value = ""
    adjectiveElem.value = ""
    verbElem.value = ""
})

document.body.appendChild(shuffleBtn)
document.body.appendChild(brElem)
document.body.appendChild(refreshBtn)

