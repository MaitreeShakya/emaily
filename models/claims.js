const mongoose = require('mongoose');
const { Schema } = mongoose;

const claimSchema = new Schema({
  claimAddress: String,
  dateCreated: Date,
});

mongoose.model('claims', claimSchema);