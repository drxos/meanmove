var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Bonjour from MOVE"});
});

router.get('/about', function(req, res, next){
	res.render('index', {title: "About me"});
})

module.exports = router;
