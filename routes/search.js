var express = require('express');
var router = express.Router();
const db = require('better-sqlite3')('./data/freakyfashion.db', {
    verbose: console.log
});

router.get('/', function (req, res, next) {

    const { brand } = req.query;

    let sql = 'SELECT * FROM clothes';
    let params = [];

    if (brand) {
        sql += ' WHERE LOWER(brand) = LOWER(?)';
        params.push(brand);
    }
    const select = db.prepare(sql);
    const clothes = select.all(...params);

    res.render('search', {
        title: 'Freaky Fashion',
        clothes: clothes
    });
});

module.exports = router;
