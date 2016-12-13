var express = require('express');
var router = express.Router();

var LocalVotacao = require('../models/LocalVotacao.js');

/* GET /localVotacao Listagem de perfis. */
router.get('/', function(req, res, next) {
  LocalVotacao.find(function (err, localVotacao) {
    if (err) return next(err);
    res.json(localVotacao);
  });
});

/* POST /localVotacao Cadastro de localVotacao */
router.post('/', function(req, res, next) {
  LocalVotacao.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /localVotacao/id  Lista filtrada por um localVotacao*/
router.get('/:id', function(req, res, next) {
  LocalVotacao.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /localVotacao/:id Salva a edição de localVotacao */
router.put('/:id', function(req, res, next) {
  LocalVotacao.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /localVotacao/:id Deletando o localVotacao a partir do id */
router.delete('/:id', function(req, res, next) {
  LocalVotacao.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
