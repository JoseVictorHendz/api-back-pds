'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/test-controller');

router.get('/teste1', controller.test1);
router.post('/', controller.test);

module.exports = router;