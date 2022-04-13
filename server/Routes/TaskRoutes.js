const { Router } = require('express')
const router = Router()
const taskController = require('../Controllers/TaskController')

router.get('/tasks', taskController.getAllTask)
router.post('/tasks', taskController.addNewTask)
router.delete('/tasks/:id', taskController.removeTask)
router.patch('/tasks/:id', taskController.updateTask)

module.exports = router
