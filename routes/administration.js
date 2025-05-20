var express = require('express');
var router = express.Router();


router.get('/admin/products', function(req, res, next) {
  res.render('administration', { title: 'Administration' });
});

module.exports = router;
