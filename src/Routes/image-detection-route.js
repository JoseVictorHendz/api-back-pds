'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/image-detection-controller');

router.post('/image-label-detection', controller.imageLabelDetection);
router.post('/image-properties-detection', controller.imagePropertiesDetection)
router.post('/image-document-text-detection', controller.imageDocumentTextDetection)

module.exports = router;