import axios from "axios";
const BASEURL = "https://api.quotable.io/random";

export default {
  getAPIQuote: function() {
    return axios.get(BASEURL);
  },
  // Saves new user to db
  saveQuote: function (postData) {
    return axios.post("/api/quotes", postData);
  },
};