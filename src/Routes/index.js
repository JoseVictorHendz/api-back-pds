const express = require('express');
const router  = express.Router();

router.use('/', require('./test-route'));
router.use('/image-detection', require('./image-detection-route'));
router.use('/sentance-translation', require('./sentance-translation-route'));



module.exports = router;
