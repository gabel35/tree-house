const router = require("express").Router();
const userRoutes = require("./user");
const Posts = require("../../controllers/posts.js")

// user routes
router.use("/user", userRoutes)

//get all posts
// router.route("/posts").get(Posts.findAll)

module.exports = router;
