const express = require("express");
const dataController = require('../controller/dataController')

const router = express.Router()

router.get('/getData',dataController.getData);
router.post('/postData',dataController.postData)

module.exports = router