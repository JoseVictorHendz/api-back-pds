'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/teste-controller');

router.get('/', controller.teste);

module.exports = router;