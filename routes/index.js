var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('user', {
  name: String,
  email: String
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', function(req, res, next) {
  console.log(req.body);
  (new User(req.body.user)).save(function (err, result) {
    if (err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

module.exports = router;
