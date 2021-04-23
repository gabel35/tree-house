const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public")); //double check folder names
}

//using backend routes
const routes = require("./routes");
app.use('/', routes);

const secureRoute = require('./routes/secure-routes');



const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const env = require("dotenv");


// passport
//secret session
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
 
app.use(passport.initialize());
 
app.use(passport.session()); 

// JWT strategy middleware
app.use('/user', passport.authenticate("jwt", { session: false }), secureRoute);

// models
const models = require("./models");
console.log("models are:", models);
const sequelize = require("./config/config.js");

// test sql models
models.User.sync().then(function() {
  models.Posts.sequelize.sync().then(function() {
    console.log("Nice! Database looks fine")
  })
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});

//passport strategies
// require('./config/passport/passport.js')(passport, models.user);


//your app is being served
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});