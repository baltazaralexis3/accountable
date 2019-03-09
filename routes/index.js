var express = require('express');
var router = express.Router();
// var usersCtrl = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'accountable.' });
});



// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }


module.exports = router;
