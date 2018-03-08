const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findById(id)
    .then(user => {
      done(null, user);
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

      const existingUser = await user.findOne({ googleId: profile.id })

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new user({
          googleId: profile.id,
          givenName: profile.displayName
        }).save()
        done(null, user);
      }
    }
  )
);