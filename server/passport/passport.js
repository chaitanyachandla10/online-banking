var FacebookStrategy = require('passport-facebook').Strategy;
//var User =require();
var session = require('express-session'); // Import Express Session Package
//var jwt = require('jsonwebtoken'); // Import JWT Package
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
    callbackURL: "http://localhost:5100/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
   console.log(profile);
  /*User.findOne({email:profile._json.email}).select('username password email').exec(function(err,user))
   {
   	if(err)
   		done(err);
   	if(user && user !=null){
   		done(null,user);
   	}
   	else{
   		done(err);
   	}
   });*/
		done(null,profile);
  }
	));	

		myapp.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { successRedirect: '/home',
	                                      failureRedirect: '/login' }),function(req,res)
		  {
		  	res.redirect('/home');
		  });

	myapp.get('/auth/facebook',passport.authenticate('facebook', { scope: 'email' }));
			return passport;
}