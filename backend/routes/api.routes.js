var router = require('express').Router();

var users = require('./api/users.route');

router.use('/users', users);

module.exports = router;