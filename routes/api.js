// this is where all of the api routers will go (rep routers)

const express = require('express');
const router = express.Router;
var request = require('request');

//will need a POST route for when 


// authentication function also goes here
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;