var FacebookStrategy = require('passport-facebook').Strategy;
var User =require('../models/user');
var session = require('express-session'); // Import Express Session Package
var jwt = require('jsonwebtoken'); // Import JWT Package
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

		 passport.serializeUser(function(user, done) {
		  done(null, user.id);
		});

		passport.deserializeUser(function(id, done) {
		  User.findById(id, function(err, user) {
		    done(err, user);
		  });
		});
			passport.use(new FacebookStrategy({
    clientID: '134746267135308',
    clientSecret: 'cfca9218721f1785a3f29821c468991c',
    callbackURL: "http://localhost:5100/#!/home",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({email: email.id }, function (err, user) {
      return cb(err, user);
    });
  }
    ));

		myapp.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
    // Successful authentication, redirect home. 
    res.render('..client/controller/home');
  });
    myapp.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    return passport; // Return Passport Object
};
