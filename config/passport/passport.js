const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
 
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
 
}

passport.use('local-signup', new LocalStrategy(
 
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
 
    },

    function(req, email, password, done) {
       const generateHash = function(password) {
 
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
         
        };
    
 
//check if user exists, if not add one

    user.findOne({
        where: {
            email: email
        }
    }).then(function(user) {

        if (user)

        {

            return done(null, false, {
                message: 'That email is already taken'
            });

        } else

        {

            const userPassword = generateHash(password);

            const data =

                {
                    email: email,

                    password: userPassword,

                    firstName: req.body.firstName,

                    lastName: req.body.lastName

                };

            //sequelize method for adding new entries
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


