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

  app.get('/api/claims', requireLogin, async (req, res) => {
    const claims = await Claim.find();

    res.send(claims);
  });

  app.get('/api/claims/:claimAddress', requireLogin, async(req,res)=>{
    const claim = await Claim.findOne({
      address: req.params.claimAddress
    });

    res.send(claim);
  });
}