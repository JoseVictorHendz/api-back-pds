const express = require('express');
const router  = express.Router();

router.use('/teste', require('./test-route'));
router.use('/image-detection', require('./image-detection-route'));

module.exports = router;
