const env = require("dotenv");
const express = require("express");
const path = require("path");
const routes = require("./routes");
const secureRoute = require("./routes/api/secure-routes");
const app = express();
const passport = require("passport");
const session = require("express-session");
// const bodyParser = require("body-parser");
const models = require("./models");
const sequelize = require("./config/config.js");
// const storage = require("./db/storage.js")
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //double check folder names
}

// models
console.log("models are:", models);


// test sql models
models.User.sequelize.sync().then(function() {
  models.Posts.sequelize.sync().then(function() {
    console.log("Nice! Database looks fine")
  })
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

//passport strategies
require("./config/passport/passport.js")(passport, models.User);

// passport
//secret session
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); 
 
app.use(passport.initialize());
 
app.use(passport.session()); 

// JWT strategy middleware
app.use("/user", passport.authenticate("jwt", { session: false }), secureRoute);

//using backend routes
app.use("/", routes);
//using image save database/api
// app.use(storage)



//your app is being served
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});