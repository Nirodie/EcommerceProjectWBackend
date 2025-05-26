var express = require('express');
var router = express.Router();
const db = require('better-sqlite3')('./data/freakyfashion.db', {
  verbose: console.log
});

router.get('/', function (req, res, next) {

  const select = db.prepare('SELECT * FROM clothes');
  const clothes = select.all();
  res.render('index', {
    title: 'Freaky Fashion',
    clothes
  });
});

module.exports = router;
