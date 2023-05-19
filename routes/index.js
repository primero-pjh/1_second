const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bearing', function (req, res, next) {
    res.render('bearing', {});
});
router.get('/rc', function (req, res, next) {
  res.render('rc', {});
});
router.get('/admin', function (req, res, next) {
  res.render('admin', {});
});
router.get('/admin/login', function (req, res, next) {
  res.render('admin/login', {});
});

module.exports = router;
