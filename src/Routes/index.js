const express = require('express');
const router  = express.Router();

router.use('/', require('./teste-route'));
router.use('/image-detection', require('./image-detection-route'));

module.exports = router;
