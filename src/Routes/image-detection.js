'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/image-detection-controller');

router.post('/image-detection', controller.imageRecognition);

module.exports = router;