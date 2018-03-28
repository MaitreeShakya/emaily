const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Claim = mongoose.model('claims');

module.exports = app => {
  app.post('/api/claims', requireLogin, (req, res) => {
    const { claimAddress, dateCreated } = req.body;

    const claim = new Claim({
      claimAddress,
      dateCreated: Date.now()
    });
  });
};
