// this is where all of the api routers will go (rep routers)

const express = require('express');
const router = express.Router;
var request = require('request');
const repCardsCtrl = require('../controllers/repCards');

//get all reps (index)
router.get('/allRepcards', repCardsCtrl.getAllRepCards);
//add repCard to user board
router.post('/users/index', isLoggedIn, repCardsCtrl.createRepCard);
//delete rep card from board
router.delete('/users/index/:id', repCardsCtrl.deleteRepCard);


// authentication function also goes here
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;