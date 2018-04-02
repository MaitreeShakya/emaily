const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Claim = mongoose.model('claims');

module.exports = app => {
  app.post('/api/claims', requireLogin, (req, res) => {
    const { address, name, email, company, dateCreated, done } = req.body;

    const claim = new Claim({
      address,
      name,
      email,
      company,
      dateCreated: Date.now()
    }).save();
  });
};
