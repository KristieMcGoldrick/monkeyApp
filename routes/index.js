var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('cebus').select().then(function(data) {
    res.render('index', {cebus: data})
  })
});

router.get('/create', function(req, res, next) {
  res.render('create');
});

router.post('/create', function(req, res, next) {
  knex('cebus').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(error) {
    console.log(error);
  })
});


module.exports = router;
