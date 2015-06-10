var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userInput = req.query.location;
  console.log(req.query.location);
  res.render('index', { title: 'WeatherNow', location: userInput });
});



module.exports = router;
