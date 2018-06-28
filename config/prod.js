//prod.js - production keys
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGODB_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectURI: process.env.GOOGLE_REDIRECT_URI,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
  // accessKeyId: 'AKIAISE7HY5NNPEYW3LA',
  // secretAccessKey: '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'
};