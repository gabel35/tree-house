const bCrypt = require("bcrypt-nodejs");
const passport = require ("passport");
const User = require("../../models/user");
const LocalStrategy = require("passport-local").Strategy;
 
module.exports = function(passport, user) {
 
    

//SIGN UP
passport.use("local-signup", new LocalStrategy(
 
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
 
    },

    function(req, email, password, done) {
       const generateHash = function(password) {
 
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
         
        };
    
    // serialize function
    passport.serializeUser(function(user, done) {
 
            done(null, user.id);
         
        });
 
    // deserialize function
    passport.deserializeUser(function(id, done) {
 
        User.findById(id).then(function(user) {
     
            if (user) {
     
                done(null, user.get());
     
            } else {
     
                done(user.errors, null);
     
            }
     
        });
     
    });


//check if user exists, if not add one

    User.findOne({
        where: {
            email: email
        }
    }).then(function(user) {

        if (user)

        {
            return done(null, false, {
                message: "That email is already taken"
            });

        } else

        {

            const userPassword = generateHash(password);
            console.log(userPassword)
            const data =

                {
                    email: email,

                    password: userPassword,

                    firstName: req.body.firstName,

                    lastName: req.body.lastName,

                    phone: req.body.phone,

                    apt: req.body.apt

                };


            User.create(data).then(function(newUser, created) {

                if (!newUser) {

                    return done(null, false);

                }

                if (newUser) {

                    return done(null, newUser);

                }

            });
 
        }

    });

}

));
//LOGIN
passport.use("local-signin", new LocalStrategy(
 
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true 
    },
 
 
    function(req, email, password, done) {
 
        const User = user;
 
        const isValidPassword = function(userpass, password) {
 
            return bCrypt.compareSync(password, userpass);
 
        }
 
        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {
 
            if (!user) {
 
                return done(null, false, {
                    message: "Email does not exist"
                });
 
            }
 
            if (!isValidPassword(user.password, password)) {
 
                return done(null, false, {
                    message: "Incorrect password."
                });
 
            }
 
 
            const userinfo = user.get();
            return done(null, userinfo);
 
 
        }).catch(function(err) {
 
            console.log("Error:", err);
 
            return done(null, false, {
                message: "Something went wrong with your Signin"
            });
 
        });
 
 
    }
 
));
// verifying JWT tokens

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
    new JWTstrategy(
      {
        secretOrKey: "TOP_SECRET",
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token")
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
    }