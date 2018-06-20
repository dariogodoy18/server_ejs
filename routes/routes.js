const express = require('express')
const router = express.Router()
//Controls Settings
const controlsFuntions = require('../controllers/controllers')
const arrayEntries = controlsFuntions.localEntrys

//Get requests
router.get('/', controlsFuntions.index)

router.get('/new-entry', controlsFuntions.newEntry)

//Post requests
router.post('/new-entry', controlsFuntions.addNewEntry)



module.exports = router;