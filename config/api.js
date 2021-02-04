const axios = require("axios");

const api = axios.create({
   timeout: 180000,
   baseURL: 'https://onesoftwareca.herokuapp.com'
});


module.exports = api;