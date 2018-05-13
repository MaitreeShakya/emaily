const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomName: String,
  roomSize: String,
  age: String,
  floorType: String,
  subFloor: String,
  underlay: String,
});

mongoose.model('rooms', roomSchema);

//module.exports = roomSchema;
