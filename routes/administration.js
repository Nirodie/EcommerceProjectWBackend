var express = require('express');
var router = express.Router();


router.get('/products/new', function(req, res, next) {
  res.render('administration-new', { title: 'Administration', layout: 'admin' });
});

router.get('/products', function(req, res, next) {
  res.render('administration', { title: 'Administration', layout: 'admin' });
});

module.exports = router;
