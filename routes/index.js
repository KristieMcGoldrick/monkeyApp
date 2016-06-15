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

router.get('/:id', function(req, res, next) {
  knex('cebus').where({id: req.params.id}).first().then(function(data) {
    res.render('detail', {monkey: data});
  })
});

router.get('/:id/edit', function(req, res, next) {
  knex('cebus').where({id: req.params.id}).first().then(function(data) {
    res.render('edit', {monkey: data})
  })
});

router.post('/:id/edit', function(req, res, next) {
  knex('cebus').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect('/' + req.params.id);
  })
});

// Delete a monkey
router.get('/:id/delete', function(req, res, next) {
  knex('cebus').where({id: req.params.id}).del().then(function(data) {
    res.redirect('/');
  })
});

router.post('/create', function(req, res, next) {
  knex('cebus').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(error) {
    console.log(error);
  })
});

module.exports = router;
