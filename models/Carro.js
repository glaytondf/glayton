var mongoose = require('mongoose');

var CarroSchema = new mongoose.Schema({
  placa: String,
  ano: Number,
  marca: String,
  modelo: String
});

module.exports = mongoose.model('CarroGT', CarroSchema);
