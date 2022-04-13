import React from 'react'
import axios from 'axios'

import editImage from '../../assets/img/edit.svg'
import './Tasks.scss'
import AddTaskForm from './AddTaskForm'
import Task from './Task'
import { Link } from 'react-router-dom'

const Tasks = (props) => {
  const { list, tasks, onEditTitle, onAddTask, withoutEmpty, setTasks } = props
  function editTitle() {
    const newTitle = window.prompt('Название списка:', list?.name)

    if (newTitle) {
      onEditTitle(list.id, newTitle)
      axios
        .patch('http://localhost:3001/lists/' + list.id, {
          name: newTitle,
        })
        .catch(() => {
          alert('Не удалось обновить название списка')
        })
    }
  }

  function onRemove(removingTask) {
    axios
      .delete('http://localhost:3001/tasks/' + removingTask.id)
      .then(() => {
        const newTasks = tasks.filter((task) => removingTask.id !== task.id)

        setTasks(newTasks)
      })
      .catch(() => {
        alert('Ошибка: задача не была удалена')
      })
  }

  function onEditTask(editingTask) {
    const newText = window.prompt('Введите новое название:', editingTask.name)

    if (!newText) {
      return
    }

    axios
      .patch('http://localhost:3001/tasks/' + editingTask.id, {
        name: newText,
        completed: editingTask.completed,
      })
      .then(() => {
        const newTasks = tasks.map((task) => {
          if (task.id === editingTask.id) {
            task.name = newText
          }

          return task
        })

        setTasks(newTasks)
      })
      .catch(() => {
        alert('Ошибка: задача не была изменена')
      })
  }

  return (
    <div className="tasks">
      <h2 className={'tasks__title'} style={{ color: list?.hex }}>
        <Link to={'/lists/' + list?.id}>{list?.name}</Link>
        <img onClick={editTitle} src={editImage} alt="Edit" />
      </h2>

      <div className="tasks__items">
        {list?.taskCount === 0 && !withoutEmpty ? (
          <h2 className={'tasks__items-subtitle'}>Задачи отсутствуют</h2>
        ) : (
          ''
        )}
        {tasks
          .filter((task) => task['list_id'] === list?.id)
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              onRemove={() => onRemove(task)}
              onEdit={() => {
                onEditTask(task)
              }}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
      </div>
      <AddTaskForm key={list?.id} list={list} onAddTask={onAddTask} />
    </div>
  )
}

export default Tasks
