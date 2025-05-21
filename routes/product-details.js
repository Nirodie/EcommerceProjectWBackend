var express = require('express');
var router = express.Router();
const db = require("better-sqlite3")("./data/freakyfashion.db", {
  verbose: console.log,
});


router.get('/:id', function (req, res, next) {
  const clothingId = req.params.id;

  const select = db.prepare("SELECT * FROM clothes WHERE id = ?");
  const selectAll = db.prepare('SELECT * FROM clothes');
  const clothing = select.get(clothingId);
  const clothes = selectAll.all();

  res.render('product-details', {
    title: clothing.name,
    clothing,
    clothes,
  });
});

module.exports = router;
