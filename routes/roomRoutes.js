const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Room = mongoose.model('rooms');

module.exports = app => {
  app.post('/api/rooms', (req, res) => {

    const { claimID, roomName, roomSize, floorType, age, subFloor, underlay, done } = req.body

    const room = new Room({
      roomName,
      roomSize,
      age,
      floorType,
      subFloor,
      underlay,
    }).save();
  });

  app.get('/api/rooms', async(req, res) => {
    console.log(req.body);
    const rooms = await Room.find();

    res.send(rooms);
  });
}