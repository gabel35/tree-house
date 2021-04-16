const router = require("express").Router();
const user = require("../../controllers/user.js");

// Matches with "/api/books"
router.route("/")
  .get(user.findAll)

module.exports = router;