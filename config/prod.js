//prod.js - production keys
module.exports = {
   googleClientID: process.env.GOOGLE_CLIENT_ID,
   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
   mongoURI: process.env.MONGODB_URI,
   cookieKey: process.env.COOKIE_KEY,
   googleRedirectURI: process.env.GOOGLE_REDIRECT_URI,

};