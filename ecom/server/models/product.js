const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Need name, desc, price & ID. ID is created by default in MongoDB

const product = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: { default: 1, type: Number }
});

module.exports = mongoose.model('Product', product);
