var express = require('express');
var router = express.Router();
const db = require('better-sqlite3')('./data/freakyfashion.db', {
  verbose: console.log
});


router.post('/new', function (req, res, next) {
  const { name, price, brand, imageUrl, description, SKU } =
    req.body;

  const insert = db.prepare(`
     INSERT INTO clothes (name, price, brand, imageUrl, description, SKU)
     VALUES (?, ?, ?, ?, ?, ?)`);

  insert.run(name, price, brand, imageUrl, description, SKU);
  res.redirect(`/admin/products`);
});

router.get('/new', function (req, res, next) {
  res.render('administration-new', { title: 'Administration', layout: 'adminlayout' });
});

router.get('/', function (req, res, next) {
  const select = db.prepare('SELECT * FROM clothes');
  const clothes = select.all();
  res.render('administration',
    {
      title: 'Administration',
      layout: 'adminlayout',
      clothes
    });
});

module.exports = router;
