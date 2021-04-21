const router = require("express").Router();
const User = require("../../controllers/user.js");
const db = require("../../models");

router
  .route("/signup")
  .post(User.create);

module.exports = router;

// app.post('/signup', passport.authenticate('local-signup', 
// route for signup already exist need to add passport authentication/ have passport as a parameter
// need to find a place to put this to coordinate with existing code


//app . get dashboard?


//app .get logout?


//app.post signin passport/authenticate 