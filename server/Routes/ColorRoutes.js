const colorController = require('../Controllers/ColorController')
const { Router } = require('express')
const router = Router()

router.get('/colors', colorController.getAllColors)

module.exports = router
