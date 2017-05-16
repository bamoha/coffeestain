var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
	res.render('contact')
});

router.post('/contact', function(req, res){
	name = req.user.name;
	email = req.user.email;
	message = req.user.email;

	console.log(name);
	console.log(email);
	console.log(message);

	res.redirect('/')
});

module.exports = router;
