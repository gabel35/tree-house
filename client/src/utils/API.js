import axios from "axios";

export default {
  // Gets all users
  getUser: function() {
    return axios.get("/api/user/profile"); 
  },
  // Saves a user to the database
  saveUser: function(userData) {
      console.log("frontend api user", userData)
    return axios.post("/api/user/signup", userData);
  },
  login: function(userData) {
    console.log("frontend login", userData)
    return axios.post("/api/user/login", userData);
  },
  //gets the posts per user
  getUserPosts: function(id) {
    return axios.get("/api/user/" + id + "/posts")
  },
  //get all posts
  getPosts: function() {
    return axios.get("/api/posts")
  }

};

