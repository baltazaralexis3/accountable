var express = require('express');
var router = express.Router;
var commboardCtrl = require('../controllers/commboard');

//need an index and show
router.get('/', commboardCtrl.index);


//shows an individual post from the community board
//do i need this route?? or do i use the userboard controller?
router.get('/:id', commboardCtrl.show);

//icebox: enable update, edit actions to add comments to other users' cards

module.exports = router;