var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('findform', { title: 'Find caregivers' });
});

module.exports = router;