const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bearing', function (req, res, next) {
    res.render('bearing', {});
});
router.get('/admin', function (req, res, next) {
  res.render('admin', {});
});

module.exports = router;
