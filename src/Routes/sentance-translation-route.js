'use strict';
 
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/sentance-translation-controller');


router.get('/:_text/:_currenteLanguage/:_targetLanguage', controller.sentanceTranslation)

module.exports = router;