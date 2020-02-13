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
    res.end(JSON.stringify(obj, null, 2))
  });
});

module.exports = router;
