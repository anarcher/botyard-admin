var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signin', function(req, res, next) {
  res.send('not implemented yet')
});

module.exports = router;
