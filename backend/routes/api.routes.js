var router = require('express').Router();

var users = require('./api/users.routes');

router.use('/users', users);

module.exports = router;