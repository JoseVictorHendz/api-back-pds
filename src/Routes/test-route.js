'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/test-controller');

router.post('/', controller.test);

module.exports = router;