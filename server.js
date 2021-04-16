const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
env = require('dotenv').load();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// passport
//secret session
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
 
app.use(passport.initialize());
 
app.use(passport.session()); 

