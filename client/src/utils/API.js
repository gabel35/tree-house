import axios from "axios";

export default {
  // Gets all users
  getUser: function(email) {
    // console.log(email)
    return axios.get("/api/user/profile/", email); 
  },
  // Saves a user to the database
  saveUser: function(userData) {
    // console.log(userData)
    return axios.post("/api/user/signup", userData);
  },
  login: function(userData) {
    // console.log("front api", userData);
    return axios.post("/api/user/login", userData);
  },
  savePosts: function(postData) {
    return axios.post("/api/user/postad", postData);
  },
  //gets the posts per user
  getUserPosts: function(id) {
    return axios.get("/api/user/" + id + "/posts");
  },
  //get all posts
  getPosts: function() {
    return axios.get("/api/posts")
  }

};

