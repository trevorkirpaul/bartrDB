const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  description: String,
  price: String,
  createdBy: String,
  location: String,
  imagePath: String,
  email: String,
  tags: []
});

module.exports = mongoose.model('Item', ItemSchema);