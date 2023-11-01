//Fetch API
//Returns a promise:
// console.log(fetch("https://api.artic.edu/api/v1/artworks/4"));

//Get Request

// console.log("starting..");

// const myParagraph = document.getElementById("info-art");

// const displayArtwork = (art) => {
//   const { title, artist_title: artist } = art.data;
//   myParagraph.textContent = `The painting name is ${title} by the artist ${artist}`;
// };

// const getArtwork = () => {
//   console.log("Working..");
//   fetch("https://api.artic.edu/api/v1/artworks/14572")
//     .then((response) => {
//       if (response.ok) {
//         console.log(response);
//         return response.json();
//       } else {
//         throw new Error("Wrong artwork");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       displayArtwork(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log("Work Done...");
// };

// getArtwork();

//Post Request
// const data = {
//   title: "Article on Javascript",
//   body: "This is an article presenting the new features of Javascript",
//   userId: 1,
// };

// const addArticle = () => {
//   fetch("https://webhook.site/bd5439fa-fbf0-4f26-9a6c-2e90bbe0e064", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-type": "application/json" },
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log(response);
//         return response.json();
//       } else {
//         throw new Error("failed to make request");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => console.log(e));
// };

// addArticle();

//POST REQUEST WITH FORM DATA
// const addArticle = (e) => {
//   e.preventDefault();
//   const data = Object.fromEntries(new FormData(e.target));

//   const objBody = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-type": "application/json" },
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", objBody)
//     .then((response) => {
//       console.log(response);
//       if (response.ok === true) {
//         return response.json();
//       } else {
//         throw new Error("Wrong post");
//       }
//     })
//     .then((obj) => {
//       console.log(obj);

//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const form = document.forms[0];
// form.addEventListener("submit", addArticle);

//Chuck Norris Exercise
// const button = document.getElementById("btn");
// const div = document.getElementById("container");

// const fetchJoke = () => {
//   fetch("https://api.chucknorris.io/jokes/categories")
//     .then((response) => {
//       console.log(response);
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("error fetching category");
//       }
//     })
//     .then((data) => {
//       const randomNum = Math.floor(Math.random() * data.length);
//       const category = data[randomNum];
//       return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
//     })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("error fetching joke");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       div.textContent = data.value;
//     })
//     .catch((e) => console.log(e));
// };
// button.addEventListener("click", fetchJoke);

//Async await- differences between async and .then

// let goodGrades = 93;

// let endSemester = new Promise((resolve, reject) => {
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if ((goodGrades) => 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
// });

// const checkRequest = () => {
//   console.log("test 2");
//   endSemester.then((value) => console.log("I got an amazing gift : A ", value));
// };

// console.log("test 1");
// checkRequest();
// console.log("test 3");

//With async await:

// let goodGrades = 93;

// let endSemester = new Promise((resolve, reject) => {
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if ((goodGrades) => 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
// });

// const checkRequest = async () => {
//   let gift = await endSemester;
//   console.log(`I got a ${gift}`);
// };
// checkRequest();

//Async await example

// const getPosts = (userId) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Post ", "Done!");
//       resolve([{ title: "Article on Javascript", idArticle: 1, idUser: userId }]);
//     }, 1500);
//   });

// const getComments = (postId) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Comments ", "Done!");
//       resolve([
//         { title: "Great Article", author: "John" },
//         { title: "Interesting Article", author: "Lea" },
//       ]);
//     }, 1500);
//   });

// const getLikes = (postId) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Likes ", "Done!");
//       resolve(5);
//     }, 1500);
//   });

// const getLatestPostActivity = async (userId) => {
//   const posts = await getPosts(userId);
//   const latestPost = posts[0];
//   const comments = await getComments(latestPost.id);
//   const likes = await getLikes(latestPost.idArticle);
//   return { comments: comments, likes: likes };
// };

// getLatestPostActivity(10)
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

// ASYNC AWAIT LOOPS

// function showTimeout(milliseconds, id) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(id, " Done!");
//       resolve("OK");
//     }, milliseconds);
//   });
// }

// (async function () {
//   console.log("start");

//   for (const item of ["first", "second", "third"]) {
//     await showTimeout(2000, item);
//   }

//   console.log("end");
// })();

//Async await & Promise.all

// const getPosts = (userId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Post ","Done!");
//         resolve([{ title: "Article on Javascript", idArticle : 1, idUser: userId}]);
//     }, 1500);
// });

// const getComments = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Comments ","Done!");
//         resolve([{title: "Great Article", author: "John"},
//                 {title: "Interesting Article", author: "Lea"}]);
//     }, 1500);
// });

// const getLikes = (postId) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Likes ", "Done!");
//         resolve(5);
//     }, 1500);
// });

// const getLatestPostActivity = async (userId) => {
//     const posts = await getPosts(userId);
//     const latestPost = posts[0];
//     const [comments, likes] = await Promise.all(
//         [getComments(latestPost.idArticle), getLikes(latestPost.idArticle)]);

//     return { comments: comments, likes: likes };
// }

// getLatestPostActivity(10)
// .then(res => {
// console.log('everything ', res);
// })

//Error handling with Async Await
// let goodGrades = 93;

// let endSemester = new Promise((resolve, reject) => {
//   if (goodGrades > 90) {
//     resolve("Computer");
//   } else if ((goodGrades) => 80 && goodGrades <= 89) {
//     resolve("Phone");
//   } else {
//     reject("I won't get the gift");
//   }
// });

// const checkRequest = async () => {
//   try {
//     hey;
//     let result = await endSemester;
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// };

// checkRequest();

//Error handling and fetch api with Async Await:

// const fetchSunrise = async (endpoint) => {
//   try {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     hey;
//     console.log(data.results.sunrise);
//   } catch (e) {
//     console.log(e);
//   }
// };

// fetchSunrise("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");
