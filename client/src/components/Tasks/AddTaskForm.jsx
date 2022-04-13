import React, { useState } from 'react'
import addNewTaskImage from '../../assets/img/addTask.svg'
import axios from 'axios'

const AddTaskForm = (props) => {
  const { onAddTask, list } = props
  const [visibleForm, setVisibleForm] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function toggleForm() {
    setVisibleForm(!visibleForm)
    setInputValue('')
  }

  function addTask(taskName) {
    const newTask = {
      list_id: list.id,
      name: taskName,
      completed: false,
    }

    setIsLoading(true)
    axios
      .post('http://localhost:3001/tasks', newTask)
      .then((response) => {
        onAddTask(list.id, response.data)
      })
      .catch(() => {
        alert('Ошибка: задача не была добавлена')
      })
      .finally(() => {
        setIsLoading(false)
        setInputValue('')
      })
  }

  return (
    <div className="tasks__form">
      {!visibleForm && (
        <div className="tasks__form-new" onClick={toggleForm}>
          <img src={addNewTaskImage} alt="Add new task" />
          <span>Новая задача</span>
        </div>
      )}
      {visibleForm && (
        <div className="tasks__form-field">
          <input
            type="text"
            placeholder={'Название задачи'}
            className={'field'}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
          />
          <button
            disabled={isLoading}
            className={'button'}
            onClick={() => addTask(inputValue)}
          >
            {isLoading ? 'Добавление...' : 'Добавить'}
          </button>
          <button className={'button button-grey'} onClick={toggleForm}>
            Отмена
          </button>
        </div>
      )}
    </div>
  )
}

export default AddTaskForm
