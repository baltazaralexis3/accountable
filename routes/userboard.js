var express = require('express');
var router = express.Router();
var userboardCtrl = require('../controllers/userboard');

router.get('/', userboardCtrl.index);
// router.get('/:id', userboardCtrl.show);
router.post('/addmember', userboardCtrl.create);
router.put('/:id', userboardCtrl.update);
router.delete('/:id', userboardCtrl.deleteCard);

router.get('/new', userboardCtrl.newCard);
router.post('/members', userboardCtrl.getMembers)
router.get('/edit/:id', userboardCtrl.edit);

module.exports = router;