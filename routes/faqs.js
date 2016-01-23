var express = require('express');
var router = express.Router();

/* GET faq's page. */
router.get('/', function(req, res, next) {
  res.render('faqs', { title: 'Faq' });
});

module.exports = router;
