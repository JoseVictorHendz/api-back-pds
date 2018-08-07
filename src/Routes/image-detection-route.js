'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/image-detection-controller');

router.post('/image-recognition', controller.imageRecognition);
router.post('/image-recognition-color', controller.imageRecognitionColors)

module.exports = router;