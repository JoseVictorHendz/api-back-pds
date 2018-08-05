const express = require('express');
const router  = express.Router();

router.use('/', require('./teste'));
router.use('/', require('./image-detection'));


module.exports = router;



