import axios from "axios";

export default {
  // Gets all users
  getUser: function() {
    return axios.get("/api/user/profile");
  },
  // Saves a user to the database
  saveUser: function(userData) {
      console.log("frotend api user", userData)
    return axios.post("/api/user/signup", userData);
  },
    login: function(userData) {
    console.log("frontend login", userData)
    return axios.post("/api/user/login", userData);
  }
  
  
};
