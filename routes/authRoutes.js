const passport = require('passport');

module.exports = (app) => {
  //   app.get('/', (req, res) =>{
  //     res.send("Welcome to DSA PhotoSystem.");
  //   });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/claims');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(),
      res.redirect('/');
  });
  app.get('/api/current_user', (req, res) => {
    //console.log(req.user);
    res.send(req.user);
  });
};