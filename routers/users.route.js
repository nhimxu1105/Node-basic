var express = require('express');

var controller = require('../controllers/users.controller');

var router = express.Router();

router.get('/', controller.user);

router.get('/create', controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.filterUser);

router.post('/create', controller.postCreate);


module.exports = router;