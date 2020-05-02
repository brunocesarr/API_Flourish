var express = require('express');
var router = express.Router();

/* GET Listagem usuários. */
router.get('/', function(req, res, next) {
    res.send('Rota Usuários!')
});

/* GET Busca usuário por id. */
router.get('/:id', function(req, res, next) {
    res.send('Rota Usuários!')
});

/* POST Cadastro de usuário. */
router.post('/', function(req, res, next) {
    res.send('Rota Usuários!')
});

/* PUT Atualiza todos os campos do usuário. */
router.put('/:id', function(req, res, next) {
    res.send('Rota Usuários!')
});

/* PATCH Atualiza os campos passados do usuário. */
router.patch('/:id', function(req, res, next) {
    res.send('Rota Usuários!')
});

module.exports = router;  