const express = require('express');
const { userCreate } = require('../controller/user');

const router = express.Router();

router.get('/', userCreate)


module.exports = router;