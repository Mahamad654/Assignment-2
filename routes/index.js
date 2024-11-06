var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});
module.exports = router;
