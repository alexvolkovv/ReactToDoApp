const { Router } = require('express')
const router = Router()
const listController = require('../Controllers/ListController')

router.get('/lists', listController.getAllList)
router.post('/lists', listController.addNewList)
router.delete('/lists/:id', listController.removeList)
router.patch('/lists/:id', listController.updateList)

module.exports = router
