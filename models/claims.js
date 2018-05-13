const RoomSchema = require('./rooms');
const ItemSchema = require('./item')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const claimSchema = new Schema({
  address: String,
  name: String,
  email: String,
  company: String,
  dateCreated: Date,
  items: [ItemSchema],
  rooms: [RoomSchema]
});

mongoose.model('claims', claimSchema);