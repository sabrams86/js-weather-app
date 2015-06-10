var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.location);
  res.render('index', { title: 'WeatherNow' });
});



module.exports = router;
