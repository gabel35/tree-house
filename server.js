const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv');
const exphbs = require('express-handlebars');




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
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

//handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//models
const models = require("./models"); //might have to change this 

//routes
const authRoute = require('./routes/api/user.js')(app, passport); //might have to change this -> changed file names to match 


//passport strategies
require('./config/passport/passport.js')(passport, models.user);


// test sql models

 
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});