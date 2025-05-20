var express = require('express');
var router = express.Router();


router.get('/admin/products/new', function(req, res, next) {
  res.render('administration-new', { title: 'Administration' });
});

module.exports = router;
