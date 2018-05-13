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

  app.get('/api/claims', async (req, res) => {
    const claims = await Claim.find().select({ items: false, rooms: false});
    //console.log(claims);
    res.send(claims);
  });

  app.get('/api/claims/:claimId', async(req,res)=>{
    const claim = await Claim.findOne({
      _id: req.params.claimId
    });
    res.send(claim);
  });

  app.delete('/api/claims/:claimId', async(req,res) =>{
    await Claim.findOneAndRemove({
      _id: req.params.claimId
    });
  });
}