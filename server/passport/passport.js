var FacebookStrategy = require('passport-facebook').Strategy
var url = 'mongodb://localhost:27017/onlinebank';
var session = require('express-session'); // Import Express Session Package
var jwt = require('jsonwebtoken'); // Import JWT Package
var url = 'mongodb://localhost:27017/onlinebank';
var MongoClient = require('mongodb').MongoClient;
//var User = require('../models/user');
module.exports=function(myapp, passport)
{

		
	  myapp.use(passport.initialize());
	  myapp.use(passport.session());
	  myapp.use(session({
	  secret: 'keyboard cat',
	  resave: false,
	  saveUninitialized: true,
	  cookie: { secure: false }
	}));
      MongoClient.connect(url , function(err,db)
    {
		passport.serializeUser(function(user, done) {
        // Check if the user has an active account
        if (user.active) {
            // Check if user's social media account has an error
            if (user.error) {
                token = 'unconfirmed/error'; // Set url to different error page
            } else {
                token = jwt.sign({email: user.email }, secret, { expiresIn: '24h' }); // If account active, give user token
            }
        } else {
            token = 'inactive/error'; // If account not active, provide invalid token for use in redirecting later
        }
        done(null, user.id); // Return user object
    });

    // Deserialize Users once logged out    
    passport.deserializeUser(function(id, done) {
        db.collection('user').findById(id, function(err, user) {
            done(err, user); // Complete deserializeUser and return done
        });
    });

passport.use(new FacebookStrategy({
    clientID: '134746267135308',
    clientSecret: 'cfca9218721f1785a3f29821c468991c',
    callbackURL: "http://localhost:5100/#!/home",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
function(token, tokenSecret, profile, done) {
            if (profile.emails) {
                db.collection('user').findOne({ email: profile.emails[0].value }).select('username active password email').exec(function(err, user) {
                    if (err) {
                        done(err);
                    } else {
                        if (user && user !== null) {
                            done(null, user);
                        } else {
                            done(err);
                        }
                    }
                });
            } else {
                user = {}; // Since no user object exists, create a temporary one in order to return an error
                user.id = 'null'; // Temporary id
                user.active = true; // Temporary status
                user.error = true; // Ensure error is known to exist
                done(null, user); // Serialize and catch error
            }
        }
    ));
});
		myapp.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
        res.send('/facebook/:token',user); // Redirect user with newly assigned token
    });
    myapp.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    return passport; // Return Passport Object
};
