// import axios from "axios"
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const question = document.getElementById("question");

let dataToSend = {};
let currentId = 0;

async function getQuestion() {
  // Here ==> TypeError: NetworkError when attempting to fetch resource.
  // error resolved by putting "http://", don't understand why (it took me more than 3 hours...)
  fetch("http://127.0.0.1:3030/")
    .then((res) => res.json())
    .then((data) => {
      currentId = data.id;
      console.log(data);
      question.innerHTML = data.question;
    });
}
getQuestion();

btn.addEventListener("click", (e) => {
  e.preventDefault();

  dataToSend = { id: currentId, answer: inputText.value };

  fetch("http://127.0.0.1:3030/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
  .then((res) => res.json())
  .then(data => {
    if (data) {
        console.log(data);
        currentId = data.id
        question.innerHTML = data.question;
        inputText.value = ""
    }
    else{
        fetch("http://127.0.0.1:3030/quiz/score")
        .then((res) => res.json())
        .then((data) => {
            alert(`The end!\nYour score: ${data}`)
            location.reload()
        });
    }
  })
});
