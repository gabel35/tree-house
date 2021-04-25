const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../../controllers/user.js");
const Posts = require("../../controllers/posts.js")
const db = require("../../models");

// router
//   .route("/signup")
//   .post(User.create);

router
  .route("/:id")
  .get(User.findById)

router
  .route("/postad")
  .post(Posts.create)

router
  .route("/edit-add/:id")
  .put(Posts.update)
  .delete(Posts.remove)

  // signup endpoint
  router.post(
    "/signup",
    passport.authenticate("local-signup", { session: false }),
    async (req, res, next) => {
      res.json({
        message: "Signup successful",
        user: req.user
      });
    }
  );



// login endpoint
router.post(
  "/login",
  async (req, res, next) => {
    passport.authenticate(
      "local-signin",
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error("An error occurred.");

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, "TOP_SECRET");

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;

// app.post('/signup', passport.authenticate('local-signup', 
// route for signup already exist need to add passport authentication/ have passport as a parameter
// need to find a place to put this to coordinate with existing code
