'use strict';
 
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/sentance-translation-controller');


router.get('/:_text/:_target', controller.sentanceTranslation)

module.exports = router;