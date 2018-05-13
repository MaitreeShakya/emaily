const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  roomName: String,
  itemPhoto: String,
  itemDescription: String,
  brand:  String,
  disposition: String,
  qty: String,
  model: String,
  serial: String,
  receiptPhoto: String,
  leftTaken: String
})

module.exports = itemSchema;