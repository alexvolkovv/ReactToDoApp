import React from 'react'
import axios from 'axios'

import editImage from '../../assets/img/edit.svg'
import './Tasks.scss'
import AddTaskForm from './AddTaskForm'

const Tasks = (props) => {
  const { list, tasks, onEditTitle, onAddTask } = props
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
  return (
    <div className={'todo__tasks'}>
      <div className="tasks">
        <h2 className={'tasks__title'} style={{ color: list?.hex }}>
          {list?.name}
          <img onClick={editTitle} src={editImage} alt="Edit" />
        </h2>
        <div className="tasks__items">
          {list?.taskCount === 0 ? (
            <h2 className={'tasks__items-subtitle'}>Задачи отсутствуют</h2>
          ) : (
            ''
          )}
          {tasks
            .filter((item) => item['list_id'] === list?.id)
            .map((item) => (
              <div key={item.id} className="tasks__items-item">
                <div className={'checkbox'}>
                  <input type="checkbox" name="" id={`task-id${item.id}`} />
                  <label htmlFor={`task-id${item.id}`}>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <input type="text" value={item.name} readOnly={true} />
              </div>
            ))}
        </div>
        <AddTaskForm list={list} onAddTask={onAddTask} />
      </div>
    </div>
  )
}

export default Tasks
