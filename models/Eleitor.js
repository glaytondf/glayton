var mongoose = require('mongoose');

var EleitorSchema = new mongoose.Schema({
  inscricao: Number,
  nome: String,
  data_nascimento: Date,
  nome_mae: String,
  nome_pai: String,
  endereco: String
});

module.exports = mongoose.model('EleitorSECAD', EleitorSchema);
