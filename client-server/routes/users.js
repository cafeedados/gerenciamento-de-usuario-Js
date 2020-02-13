var express = require('express');
var assert = require('assert')
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  //colando codigo abaixo da documentacao do restfy
  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    

     /**
     * jogar na tela do meu express do servidor local
     */
    res.json(obj);
  });
});




router.get('/:id', function(req, res, next) {

  //colando codigo abaixo da documentacao do restfy
  client.get(`/users/${req.params.id}`, function(err, request, response, obj) {
    assert.ifError(err);
  
    

     /**
     * jogar na tela do meu express do servidor local
     */
     res.json(obj);
  });
});


router.put('/:id', function(req, res, next) {

  // o put precisa imputar outro paramtro que e um objeto com os dados
  client.put(`/users/${req.params.id}`, req.body ,function(err, request, response, obj) {
    assert.ifError(err);
  
    

     /**
     * jogar na tela do meu express do servidor local
     */
     res.json(obj);
  });
});


router.delete('/:id', function(req, res, next) {

  // o put precisa imputar outro paramtro que e um objeto com os dados
  client.del(`/users/${req.params.id}`, function(err, request, response, obj) {
    assert.ifError(err);
  
    

     /**
     * jogar na tela do meu express do servidor local
     */
     res.json(obj);
  });
});

router.post('/', function(req, res, next) {

  // o put precisa imputar outro paramtro que e um objeto com os dados
  client.post('/users', req.body ,function(err, request, response, obj) {
    assert.ifError(err);
  
    

     /**
     * jogar na tela do meu express do servidor local
     */
     res.json(obj);
  });
});


module.exports = router;
