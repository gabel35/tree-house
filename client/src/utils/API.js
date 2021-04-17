import axios from "axios";

export default {
  // Gets all users
  getUser: function() {
    return axios.get("/api/login");
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  }
};