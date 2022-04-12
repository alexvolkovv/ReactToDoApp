const { Router } = require('express')
const router = Router()
const taskController = require('../Controllers/TaskController')

router.get('/tasks', taskController.getAllTask)
router.post('/tasks', taskController.addNewTask)

module.exports = router
