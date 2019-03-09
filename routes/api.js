// this is where all of the api routers will go (rep routers)

const express = require('express');
const router = express.Router;
var request = require('request');

//get all reps (index)

//add repCard to user board

//delete rep card from board


// authentication function also goes here
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;