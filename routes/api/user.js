const router = require("express").Router();
const User = require("../../controllers/user.js");
const db = require("../../models");

router
  .route("/signup")
  .post(User.create);

module.exports = router;