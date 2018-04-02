const mongoose = require('mongoose');
const { Schema } = mongoose;

const claimSchema = new Schema({
  address: String,
  name: String,
  email: String,
  company: String,
  dateCreated: Date,
});

mongoose.model('claims', claimSchema);