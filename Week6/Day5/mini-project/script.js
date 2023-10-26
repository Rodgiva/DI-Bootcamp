// const DOMELEMENTS = {
//   get: {
//     container: document.getElementById("container"),
//   },
//   create: {
//     image: document.createElement("img"),
//     div: document.createElement("div"),
//     image: document.createElement("img"),
//     h3: document.createElement("h3"),
//     p: document.createElement("p"),
//   },
// };

// const imageElem = document.createElement("img")
// const divElem = document.createElement("div")
// const h3Elem = document.createElement("h3")
// const pElem = document.createElement("p")

const containerElem = document.getElementById("container");
const inputElem = document.getElementById("robotInput");

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

let robotsToDisplay = robots;

const robotsDisplay = (robots) => {
    containerElem.innerHTML = ""
  robots.forEach((item) => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const details = document.createElement("div");
    const title = document.createElement("h2");
    const mail = document.createElement("p");

    img.src = item.image;
    title.textContent = item.name;
    mail.textContent = item.email;
    card.classList.add("card");
    details.classList.add("details")
    
    details.appendChild(title)
    details.appendChild(mail);
    card.appendChild(img);
    card.appendChild(details);

    containerElem.appendChild(card);
  });
};

robotsDisplay(robotsToDisplay);

const robotFilter = (x) => {
  let search = x.toLowerCase();
  let robotsName = robotsToDisplay.map((val) => val.name.toLowerCase()).filter((val) => val.startsWith(search));

  return robotsToDisplay.filter((val) => robotsName.includes(val.name.toLowerCase()));;
};

inputElem.addEventListener("input", () => {
    robotsDisplay(robotFilter(inputElem.value));
})