var mongoose = require('mongoose');

var LocalVotacaoSchema = new mongoose.Schema({
  numero: Number,
  nome: String,
  data_criacao: Date,
  qtd_secoes: Number,
  zona: Number,
  endereco: String
});

module.exports = mongoose.model('LocalVotacaoSECAD', LocalVotacaoSchema);
