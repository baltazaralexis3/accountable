var express = require('express');
var router = express.Router();
var userboardCtrl = require('../controllers/userboard');

router.get('/', userboardCtrl.index);
router.get('/:id', userboardCtrl.show);
router.post('/', userboardCtrl.create);
router.put('/:id', userboardCtrl.update);
router.delete('/:id', userboardCtrl.deleteCard);

router.get('/new', userboardCtrl.newCard);
router.get('/:id/edit', userboardCtrl.edit);

module.exports = router;