var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
