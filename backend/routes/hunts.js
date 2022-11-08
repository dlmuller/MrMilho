const express = require('express')
const router = express.Router()
const hunts = require('../archives/hunts');

router.get('/:key', hunts.getPoke)


module.exports = router;