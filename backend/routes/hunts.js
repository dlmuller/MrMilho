const express = require('express')
const router = express.Router()
const hunts = require('../archives/hunts');

router.get('/electric/:key', hunts.getPoke)
router.get('/electric/:key/img', hunts.getImg)
router.get('/electric', hunts.getHunts)


module.exports = router;