const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((User, done) => {
  done(null, User.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(User => {
      done(null, User);
    });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.googleRedirectURI,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      /*console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);*/

      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id,
          givenName: profile.displayName
        }).save()
        done(null, user);
      }
    }
  )
);