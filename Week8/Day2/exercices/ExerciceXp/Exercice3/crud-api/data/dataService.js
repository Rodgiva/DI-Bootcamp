const axios = require("axios");
// const { json } = require("express");

const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
}

module.exports = fetchPosts